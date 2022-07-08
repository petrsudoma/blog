import { AxiosError } from 'axios';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import LoadingCircle from '../../components/LoadingCircle';
import { LoginContext } from '../../context/login';
import fetchToken from '../../api/fetch-token';
import {
	Button,
	Form,
	MarginComponent,
	Heading,
	Input,
	Label,
	Wrapper,
	ErrorText,
	InputComponent,
} from './components';

const ValidationSchema = Yup.object().shape({
	username: Yup.string().required('Required'),
	password: Yup.string().required('Required'),
});

function Signin() {
	const [loading, setLoading] = useState<boolean>(false);
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();
	const loginContext = useContext(LoginContext);

	return (
		<Wrapper>
			<Formik
				initialValues={{ username: '', password: '' }}
				validationSchema={ValidationSchema}
				onSubmit={async ({ username, password }) => {
					setLoading(true);
					try {
						const res = await fetchToken(username, password);
						localStorage.setItem('access_token', res.data.access_token);
						localStorage.setItem(
							'token_expiration',
							new Date(new Date().getTime() + res.data.expires_in * 1000).toString()
						);
						loginContext?.signIn();
						navigate('/');
					} catch (err) {
						if (err instanceof AxiosError) {
							enqueueSnackbar(err.response?.data.message, { variant: 'error' });
						} else {
							console.error(err);
						}
					} finally {
						setLoading(false);
					}
				}}
			>
				{({ values, errors, touched, handleChange, handleSubmit }) => (
					<Form onSubmit={handleSubmit}>
						<MarginComponent>
							<Heading>Sign in</Heading>

							<InputComponent>
								<Label>Username</Label>
								<Input
									name='username'
									value={values.username}
									onChange={handleChange}
									placeholder='me@example.com'
								/>
								{errors.username && touched.username && <ErrorText>{errors.username}</ErrorText>}
							</InputComponent>

							<InputComponent>
								<Label>Password</Label>
								<Input
									name='password'
									type='password'
									value={values.password}
									onChange={handleChange}
									placeholder='********'
								/>
								{errors.password && touched.password && <ErrorText>{errors.password}</ErrorText>}
							</InputComponent>

							<Button type='submit'>Sign in</Button>
						</MarginComponent>
					</Form>
				)}
			</Formik>
			{loading ? <LoadingCircle /> : null}
		</Wrapper>
	);
}

export default Signin;
