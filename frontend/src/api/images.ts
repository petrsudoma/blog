import Axios from 'axios';

const token = localStorage.getItem('access_token');
const backendUrl = process.env.REACT_APP_BACKEND_URL as string;

async function fetchImage(imageId: string) {
	const res = await Axios.get(backendUrl + '/images/' + imageId);
	return res.data;
}

function postImage(data: FormData) {
	return Axios.post(backendUrl + '/images', data, {
		headers: { Authorization: 'Bearer ' + token },
	});
}

function deleteImage(imageId: string) {
	return Axios.delete(backendUrl + '/images/' + imageId, {
		headers: { Authorization: 'Bearer ' + token },
	});
}

export { fetchImage, postImage, deleteImage };
