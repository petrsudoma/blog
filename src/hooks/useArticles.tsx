import { useEffect, useState } from 'react';
import Axios from 'axios';
import { ArticleType } from '../types';

export function useArticles() {
	const [articles, setArticles] = useState<ArticleType[]>([]);

	useEffect(() => {
		Axios.get('https://fullstack.exercise.applifting.cz/articles', {
			headers: {
				Authorization: '283626c3-88a9-4b60-8cbf-2da10843708e',
				'X-API-KEY': '743b9a3a-7fe0-4867-bfc1-2edc9e1f486a',
			},
		})
			.then((res) => setArticles(res.data.items))
			.catch((err) => console.error(err));
	}, []);

	return articles;
}
