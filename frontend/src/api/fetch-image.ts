import Axios from 'axios';

async function fetchImage(imageId: string) {
	const res = await Axios.get((process.env.REACT_APP_BACKEND_URL as string) + 'images/' + imageId);
	return res.data;
}

export default fetchImage;
