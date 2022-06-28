import Axios from 'axios';

function getImage(imageId: string) {
	return Axios.get('https://fullstack.exercise.applifting.cz/images/' + imageId, {
		headers: { 'X-API-KEY': process.env.REACT_APP_API_KEY as string },
		responseType: 'blob',
	});
}

export default getImage;
