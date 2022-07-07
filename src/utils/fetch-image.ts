import Axios from 'axios';

async function fetchImage(imageId: string) {
	const res = await Axios.get('https://fullstack.exercise.applifting.cz/images/' + imageId, {
		headers: { 'X-API-KEY': process.env.REACT_APP_API_KEY as string },
		responseType: 'blob',
	});

	return URL.createObjectURL(res.data);
}

export default fetchImage;
