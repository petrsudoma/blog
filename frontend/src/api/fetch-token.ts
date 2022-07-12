import Axios from 'axios';

function fetchToken(username: string, password: string) {
	return Axios.post((process.env.REACT_APP_BACKEND_URL as string) + 'auth/signin', {
		username: username,
		password: password,
	});
}

export default fetchToken;
