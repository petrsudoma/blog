import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { deleteImage, postImage, updateArticle } from '../../api';
import ArticleForm from '../../components/ArticleForm';
import LoadingCircle from '../../components/LoadingCircle';
import { ArticleType } from '../../types';
import { TouchedPageHeading } from './components';

function ArticleEdit() {
	const [file, setFile] = useState<File>();
	const [loading, setLoading] = useState<boolean>(false);
	const [fileUpdated, setFileUpdated] = useState<boolean>(false);
	const [article, setArticle] = useState<ArticleType>();
	const location = useLocation();
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();

	function handleFileUpload(e: any) {
		if (e.target.files.length < 1) return;

		const file = e.target.files[0];

		if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
			return enqueueSnackbar('Upload jpeg or png', { variant: 'warning' });
		}

		setFile(file);
		setFileUpdated(true);
	}

	async function updateArticleHandler(values: any) {
		setLoading(true);
		if (fileUpdated && !file) {
			setLoading(false);
			return enqueueSnackbar('Upload image', { variant: 'error' });
		}

		let newImageId;

		if (file) {
			try {
				newImageId = await updateImage();
			} catch {
				return enqueueSnackbar('Error. Try again', { variant: 'error' });
			}
		}

		updateArticle({ ...values, image_id: newImageId || values.image_id }, article!.id)
			.then(() => navigate('/articles/list'))
			.finally(() => setLoading(false));
	}

	async function updateImage() {
		if (file) {
			const formData = new FormData();
			formData.append('image', file, file?.name);
			const res = await postImage(formData);

			await deleteImage(article!.image_id);

			return res.data;
		}
	}

	function deleteFile() {
		setFile(undefined);
		setFileUpdated(true);
	}

	useEffect(() => {
		if (location.state) {
			const { article } = location.state as { article: ArticleType };
			setArticle(article);
		} else {
			navigate('/');
		}
	}, [location.state, navigate]);

	return (
		<div>
			<TouchedPageHeading>Edit article</TouchedPageHeading>

			<ArticleForm
				originalFileTouched={fileUpdated && !file}
				handleSubmit={updateArticleHandler}
				deleteFile={deleteFile}
				handleFileUpload={handleFileUpload}
				file={file}
				title={article?.title}
				perex={article?.perex}
				content={article?.content}
				editVariant
			/>

			{loading && <LoadingCircle />}
		</div>
	);
}

export default ArticleEdit;
