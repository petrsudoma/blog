import Axios from 'axios';

function getImage() {
	return Axios.get(
		'https://fullstack.exercise.applifting.cz/images/1c2aee51-b3b7-4c65-8691-092a831af310',
		{ headers: { 'X-API-KEY': process.env.REACT_APP_API_KEY as string }, responseType: 'blob' }
	);
}

export default getImage;
