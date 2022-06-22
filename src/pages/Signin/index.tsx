import { AxiosError } from 'axios';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { LoginContext } from '../../context/login';
import getToken from '../../utils/get-token';
import { Button, Form, MarginComponent, Heading, Input, Label, Wrapper } from './components';

const ValidationSchema = Yup.object().shape({
	username: Yup.string().required('Required'),
	password: Yup.string().required('Required'),
});

function Signin() {
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();
	const loginContext = useContext(LoginContext);

	return (
		<Wrapper>
			<Formik
				initialValues={{ username: '', password: '' }}
				validationSchema={ValidationSchema}
				onSubmit={async ({ username, password }) => {
					try {
						const res = await getToken(username, password);
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
					}
				}}
			>
				{({ values, handleChange, handleSubmit }) => (
					<Form onSubmit={handleSubmit}>
						<MarginComponent>
							<Heading>Sign in</Heading>

							<Label>Username</Label>
							<Input
								name='username'
								value={values.username}
								onChange={handleChange}
								placeholder='me@example.com'
							/>

							<Label>Password</Label>
							<Input
								name='password'
								type='password'
								value={values.password}
								onChange={handleChange}
								placeholder='********'
							/>

							<Button type='submit'>Sign in</Button>
						</MarginComponent>
					</Form>
				)}
			</Formik>
		</Wrapper>
	);
}

export default Signin;
