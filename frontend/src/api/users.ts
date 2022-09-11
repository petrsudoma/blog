import Axios from 'axios';

function fetchUser(id: string) {
	return Axios.get((process.env.REACT_APP_BACKEND_URL as string) + '/users/' + id);
}

export { fetchUser };
