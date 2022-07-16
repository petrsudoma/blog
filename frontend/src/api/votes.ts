import Axios from 'axios';

import { VoteVariant } from '../types';

function fetchVotes(commentId: string) {
	return Axios.get((process.env.REACT_APP_BACKEND_URL as string) + 'votes/' + commentId);
}

function postVote(commentId: string, type: VoteVariant) {
	const token = localStorage.getItem('access_token');

	const headers = { Authorization: 'Bearer ' + token };

	return Axios({
		method: 'post',
		url: (process.env.REACT_APP_BACKEND_URL as string) + 'votes',
		data: { comment_id: commentId, type },
		headers: headers,
	});
}

export { postVote, fetchVotes };
