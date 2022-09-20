import { Formik } from 'formik';
import * as Yup from 'yup';

import {
	Button,
	ErrorText,
	Heading,
	Input,
	InputComponent,
	Label,
	MarginComponent,
	Form,
} from './components';

const ValidationSchema = Yup.object().shape({
	username: Yup.string().required('Required').min(5, 'Too short'),
	password: Yup.string().required('Required'),
});

type SignInProps = {
	handleSubmit: (username: string, password: string) => void;
};
const SignIn: React.FC<SignInProps> = function (props) {
	return (
		<Formik
			initialValues={{ username: '', password: '' }}
			validationSchema={ValidationSchema}
			onSubmit={async ({ username, password }) => props.handleSubmit(username, password)}
		>
			{({ values, errors, touched, handleChange, handleSubmit }) => (
				<Form onSubmit={handleSubmit}>
					<MarginComponent>
						<Heading>Sign in</Heading>

						<InputComponent>
							<Label>Username</Label>
							<Input name='username' value={values.username} onChange={handleChange} />
							{errors.username && touched.username && <ErrorText>{errors.username}</ErrorText>}
						</InputComponent>

						<InputComponent>
							<Label>Password</Label>
							<Input
								name='password'
								type='password'
								value={values.password}
								onChange={handleChange}
							/>
							{errors.password && touched.password && <ErrorText>{errors.password}</ErrorText>}
						</InputComponent>

						<Button type='submit'>Sign in</Button>
					</MarginComponent>
				</Form>
			)}
		</Formik>
	);
};

export default SignIn;
