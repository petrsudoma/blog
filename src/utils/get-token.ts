import Axios from 'axios';

function getToken(username: string, password: string) {
	return Axios.post(
		(process.env.REACT_APP_BACKEND_URL as string) + '/login',
		{
			username: username,
			password: password,
		},
		{ headers: { 'X-API-KEY': process.env.REACT_APP_API_KEY as string } }
	);
}

export default getToken;
