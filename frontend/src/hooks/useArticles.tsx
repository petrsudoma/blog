import { useEffect, useState } from 'react';
import Axios from 'axios';
import { ArticleType } from '../types';

export function useArticles() {
	const [articles, setArticles] = useState<ArticleType[]>([]);

	useEffect(() => {
		Axios.get((process.env.REACT_APP_BACKEND_URL as string) + 'articles')
			.then((res) => setArticles(res.data))
			.catch((err) => console.error(err));
	}, []);

	return articles;
}
