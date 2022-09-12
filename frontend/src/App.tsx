import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom';

import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Signin from './pages/Signin';
import Header from './components/Header';
import { LoginContext } from './context/login';
import ArticleCreate from './pages/ArticleCreate';
import ArticlesList from './pages/ArticlesList';

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
				<Route path='/articles' element={<Articles />} />
				<Route
					path='/articles/create'
					element={loginContext?.signedIn ? <ArticleCreate /> : <Navigate to='/' />}
				/>
				<Route path='/articles/:articleId' element={<ArticleDetail />} />
				<Route path='/articles/list' element={<ArticlesList />} />
				<Route path='/signin' element={<Signin />} />
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
