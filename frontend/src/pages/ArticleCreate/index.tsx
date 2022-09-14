import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postArticle, postImage } from '../../api';
import ArticleForm from '../../components/ArticleForm';
import LoadingCircle from '../../components/LoadingCircle';

import { TouchedPageHeading } from './components';

function ArticleCreate() {
	const [file, setFile] = useState<File>();
	const [loading, setLoading] = useState<boolean>(false);
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();

	function handleFileUpload(e: any) {
		if (e.target.files.length < 1) return;

		const file = e.target.files[0];

		if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
			return enqueueSnackbar('Upload jpeg or png', { variant: 'warning' });
		}

		setFile(file);
	}

	function deleteFile() {
		setFile(undefined);
	}

	async function uploadArticle(values: any) {
		setLoading(true);
		try {
			const imageId = await uploadImage();

			const data = {
				...values,
				image_id: imageId,
			};

			await postArticle(data)
				.catch(() => enqueueSnackbar('Try again', { variant: 'error' }))
				.finally(() => {
					setLoading(false);
					navigate('/');
				});
		} catch (err: any) {
			enqueueSnackbar(err.message, { variant: 'error' });
			setLoading(false);
		}
	}

	async function uploadImage() {
		if (file) {
			const formData = new FormData();
			formData.append('image', file, file?.name);
			const res = await postImage(formData);
			return res.data;
		}
		throw new Error('Upload image');
	}

	return (
		<div>
			<TouchedPageHeading>Create new article</TouchedPageHeading>

			<ArticleForm
				handleSubmit={uploadArticle}
				file={file}
				deleteFile={deleteFile}
				handleFileUpload={handleFileUpload}
			/>
			{loading && <LoadingCircle />}
		</div>
	);
}

export default ArticleCreate;
