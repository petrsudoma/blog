import { useEffect, useState } from 'react';
import Axios from 'axios';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';

import { ArticleType } from '../../../types';
import { Paper } from '@mui/material';

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
		id: 'comments',
		numeric: true,
		label: 'Number of comments',
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
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? 'right' : 'left'}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
						</TableSortLabel>
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

	const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	useEffect(() => {
		Axios.get((process.env.REACT_APP_BACKEND_URL as string) + '/articles').then((res) =>
			setArticles(res.data)
		);
	}, []);

	return (
		<Box>
			<Paper>
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
								.map((row: ArticleType, index) => {
									return <TableRow hover role='checkbox' tabIndex={-1} key={row.id}></TableRow>;
								})}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</Box>
	);
}
