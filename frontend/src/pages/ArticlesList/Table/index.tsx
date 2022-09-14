import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { ArticleType } from '../../../types';
import { Paper, Tooltip } from '@mui/material';
import styled from '@emotion/styled';
import { deleteArticle, fetchComments, fetchUserArticles } from '../../../api';
import { useNavigate } from 'react-router-dom';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
	order: Order,
	orderBy: Key
): (a: any, b: any) => number {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

interface HeadCell {
	id: string;
	label: string;
	numeric: boolean;
}

const headCells: readonly HeadCell[] = [
	{
		id: 'title',
		numeric: false,
		label: 'Article title',
	},
	{
		id: 'perex',
		numeric: false,
		label: 'Perex',
	},
	{
		id: 'num_of_comments',
		numeric: true,
		label: 'Comments',
	},
	{
		id: 'actions',
		numeric: false,
		label: 'Actions',
	},
];

interface EnhancedTableProps {
	onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
	order: Order;
	orderBy: string;
	rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
	const { order, orderBy, onRequestSort } = props;
	const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => (
					<TableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false}>
						<HeaderCell
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
						</HeaderCell>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

export default function ArticlesTable() {
	const [articles, setArticles] = useState<ArticleType[]>([]);
	const [order, setOrder] = useState<Order>('asc');
	const [orderBy, setOrderBy] = useState<string>('title');
	const navigate = useNavigate();

	const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	function handleDeleteArticle(articleId: string) {
		deleteArticle(articleId).then(() => window.location.reload());
	}

	useEffect(() => {
		async function getUserArticles() {
			const res = await fetchUserArticles();
			const articles: ArticleType[] = res.data;
			const articlesWithComments: ArticleType[] = [];

			for (const article of articles) {
				const comments = await fetchComments(article.id);
				articlesWithComments.push({ ...article, num_of_comments: comments.data.length });
			}

			setArticles(articlesWithComments);
		}

		getUserArticles();
	}, []);

	return (
		<Box>
			<TableBackground>
				<TableContainer>
					<Table>
						<EnhancedTableHead
							order={order}
							orderBy={orderBy}
							onRequestSort={handleRequestSort}
							rowCount={articles.length}
						/>
						<TableBody>
							{articles
								.slice()
								.sort(getComparator(order, orderBy))
								.map((row: ArticleType) => {
									return (
										<TableRow key={row.id}>
											<Cell width='20%'>{row.title}</Cell>
											<Cell width='60%'>{row.perex}</Cell>
											<Cell width='10%'>{row.num_of_comments}</Cell>
											<Cell width='10%' align='center'>
												<Tooltip title='Edit article'>
													<EditButton
														onClick={() => navigate('/articles/edit', { state: { article: row } })}
													/>
												</Tooltip>

												<Tooltip title='Delete article'>
													<DeleteButton onClick={() => handleDeleteArticle(row.id)} />
												</Tooltip>
											</Cell>
										</TableRow>
									);
								})}
						</TableBody>
					</Table>
				</TableContainer>
			</TableBackground>
		</Box>
	);
}

const TableBackground = styled(Paper)`
	margin-top: 50px;
	min-width: 600px;
`;

const HeaderCell = styled(TableSortLabel)`
	font-size: 0.9em;
	font-weight: bold;
`;

const Cell = styled(TableCell)`
	font-size: 0.7em;
`;

const EditButton = styled(EditIcon)`
	font-size: 1.4em;
	cursor: pointer;
	position: relative;
	right: 10px;
`;

const DeleteButton = styled(DeleteIcon)`
	font-size: 1.4em;
	cursor: pointer;
	position: relative;
	right: 5px;
`;
