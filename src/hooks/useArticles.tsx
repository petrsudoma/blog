import { useEffect, useState } from 'react';
import Axios from 'axios';
import { ArticleType } from '../types';

export function useArticles() {
	const [articles, setArticles] = useState<ArticleType[]>([]);

	useEffect(() => {
		Axios.get((process.env.REACT_APP_BACKEND_URL as string) + '/articles', {
			headers: {
				'X-API-KEY': process.env.REACT_APP_API_KEY as string,
			},
		})
			.then((res) => setArticles(res.data.items))
			.catch((err) => console.error(err));
	}, []);

	return articles;
}
