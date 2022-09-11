import Axios from 'axios';

async function fetchImage(imageId: string) {
	const res = await Axios.get((process.env.REACT_APP_BACKEND_URL as string) + '/images/' + imageId);
	return res.data;
}

function postImage(data: FormData) {
	const token = localStorage.getItem('access_token');
	return Axios.post((process.env.REACT_APP_BACKEND_URL as string) + '/images', data, {
		headers: { Authorization: 'Bearer ' + token },
	});
}

export { fetchImage, postImage };
