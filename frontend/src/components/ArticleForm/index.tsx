import { Formik } from 'formik';
import * as Yup from 'yup';

import {
	FormComponent,
	Label,
	Input,
	UploadButton,
	UploadTextContainer,
	UploadText,
	PerexInput,
	ContentInput,
	PublishButton,
	ErrorText,
	DeleteUpload,
} from './components';

const validationSchema = Yup.object().shape({
	title: Yup.string().min(5, 'Too short').max(50, 'Too long').required('Required'),
	perex: Yup.string().min(10, 'Too short').max(300, 'Too long (max 300)').required('Required'),
	content: Yup.string().min(10, 'Too short').required('Required'),
});

type ArticleFormProps = {
	handleSubmit: (arg: any) => void;
	handleFileUpload: (e: any) => void;
	deleteFile: () => void;
	originalFileTouched?: boolean;
	file?: File;
	title?: string;
	perex?: string;
	content?: string;
	editVariant?: boolean;
};
const ArticleForm: React.FC<ArticleFormProps> = function (props) {
	const {
		file,
		title,
		perex,
		content,
		originalFileTouched,
		editVariant,
		handleSubmit,
		handleFileUpload,
		deleteFile,
	} = props;

	return (
		<Formik
			initialValues={{ title: title || '', perex: perex || '', content: content || '' }}
			validationSchema={validationSchema}
			onSubmit={(values) => handleSubmit(values)}
			enableReinitialize
		>
			{({ values, touched, errors, handleChange, handleSubmit }) => (
				<form onSubmit={handleSubmit} style={{ display: 'inline' }}>
					<PublishButton type='submit'>
						{editVariant ? 'Edit article' : 'Publish article'}
					</PublishButton>

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
						<UploadButton uploaded={!!file || !!!originalFileTouched}>
							<input type='file' style={{ display: 'none' }} onChange={handleFileUpload} />
							Upload image
						</UploadButton>

						{(file || !originalFileTouched) && (
							<UploadTextContainer>
								<UploadText>Image uploaded</UploadText>
								<DeleteUpload onClick={deleteFile}>Delete</DeleteUpload>
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
				</form>
			)}
		</Formik>
	);
};

export default ArticleForm;
