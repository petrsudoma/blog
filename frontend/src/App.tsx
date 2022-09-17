import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ArticleDetail from './pages/ArticleDetail';
import Auth from './pages/Auth';
import Header from './components/Header';
import { LoginContext } from './context/login';
import ArticleCreate from './pages/ArticleCreate';
import MyArticles from './pages/MyArticles';
import ArticleEdit from './pages/ArticleEdit';

function App() {
	const loginContext = useContext(LoginContext);

	useEffect(() => {
		loginContext?.signIn();
	}, [loginContext]);

	return (
		<Layout>
			<Header />
			<Routes>
				<Route path='/' element={<Navigate to='/articles' />} />
				<Route path='/articles' element={<HomePage />} />
				<Route
					path='/articles/create'
					element={loginContext?.signedIn ? <ArticleCreate /> : <Navigate to='/auth' />}
				/>
				<Route path='/articles/:articleId' element={<ArticleDetail />} />
				<Route
					path='/articles/list'
					element={loginContext?.signedIn ? <MyArticles /> : <Navigate to='/auth' />}
				/>
				<Route
					path='/articles/edit'
					element={loginContext?.signedIn ? <ArticleEdit /> : <Navigate to='/auth' />}
				/>
				<Route path='/auth' element={<Auth />} />
			</Routes>
		</Layout>
	);
}

export default App;

const Layout = styled.div`
	width: 70%;
	margin: 0 auto;

	@media only screen and (max-width: 400px) {
		width: 85%;
	}
`;
