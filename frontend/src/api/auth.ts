import Axios from 'axios';

function signInUser(username: string, password: string) {
	return Axios.post((process.env.REACT_APP_BACKEND_URL as string) + '/auth/signin', {
		username: username,
		password: password,
	});
}

function signUpUser(username: string, password: string) {
	return Axios.post((process.env.REACT_APP_BACKEND_URL as string) + '/auth/signup', {
		username: username,
		password: password,
	});
}

export { signInUser, signUpUser };
