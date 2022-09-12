import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { postArticle, postImage } from '../../api';
import LoadingCircle from '../../components/LoadingCircle';

import {
	DeleteUpload,
	FormComponent,
	Input,
	Label,
	PublishButton,
	ContentInput,
	TouchedPageHeading,
	UploadButton,
	UploadText,
	UploadTextContainer,
	PerexInput,
	ErrorText,
} from './components';

const validationSchema = Yup.object().shape({
	title: Yup.string().min(5, 'Too short').max(50, 'Too long').required('Required'),
	perex: Yup.string().min(10, 'Too short').max(300, 'Too long (max 300)').required('Required'),
	content: Yup.string().min(10, 'Too short').required('Required'),
});

function ArticleCreate() {
	const [file, setFile] = useState<File>();
	const [loading, setLoading] = useState<boolean>(false);
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();

	function handleFileUpload(e: any) {
		if (e.target.files.length < 1) return;

		const file = e.target.files[0];

		if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
			return enqueueSnackbar('Upload an image', { variant: 'warning' });
		}

		setFile(file);
	}

	function deleteImage() {
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
		<Formik
			initialValues={{ title: '', perex: '', content: '' }}
			validationSchema={validationSchema}
			onSubmit={(values) => uploadArticle(values)}
		>
			{({ values, touched, errors, handleChange, handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<TouchedPageHeading>Create new article</TouchedPageHeading>
					<PublishButton type='submit'>Publish article</PublishButton>

					<FormComponent>
						<Label>Title</Label>
						<Input
							name='title'
							value={values.title}
							onChange={handleChange}
							placeholder='My first article'
						/>
						{touched.title && errors.title && <ErrorText>{errors.title}</ErrorText>}
					</FormComponent>

					<FormComponent>
						<Label>Featured image</Label>
						<UploadButton uploaded={!!file}>
							<input type='file' style={{ display: 'none' }} onChange={handleFileUpload} />
							Upload image
						</UploadButton>

						{file && (
							<UploadTextContainer>
								<UploadText>Image uploaded</UploadText>
								<DeleteUpload onClick={deleteImage}>Delete</DeleteUpload>
							</UploadTextContainer>
						)}
					</FormComponent>

					<FormComponent>
						<Label>Perex</Label>
						<PerexInput
							name='perex'
							value={values.perex}
							onChange={handleChange}
							placeholder='Write here'
						/>
						{touched.perex && errors.perex && <ErrorText>{errors.perex}</ErrorText>}
					</FormComponent>

					<FormComponent>
						<Label>Content</Label>
						<ContentInput
							name='content'
							value={values.content}
							onChange={handleChange}
							placeholder='Supports Markdown :)'
						/>
						{touched.content && errors.content && <ErrorText>{errors.content}</ErrorText>}
					</FormComponent>
					{loading && <LoadingCircle />}
				</form>
			)}
		</Formik>
	);
}

export default ArticleCreate;
