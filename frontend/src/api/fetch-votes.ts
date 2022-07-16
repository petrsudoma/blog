import Axios from 'axios';

function fetchVotes(commentId: string) {
	return Axios.get((process.env.REACT_APP_BACKEND_URL as string) + 'votes/' + commentId);
}

export { fetchVotes };
