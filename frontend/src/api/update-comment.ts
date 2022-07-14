import Axios from 'axios';

function upvoteComment(id: string) {
	Axios.put((process.env.REACT_APP_BACKEND_URL as string) + 'comments/upvote/' + id).catch((err) =>
		console.error(err)
	);
}

function downvoteComment(id: string) {
	Axios.put((process.env.REACT_APP_BACKEND_URL as string) + 'comments/downvote/' + id).catch(
		(err) => console.error(err)
	);
}

export { upvoteComment, downvoteComment };
