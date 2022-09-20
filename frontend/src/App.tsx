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
import About from './pages/About';

type ProtectedProps = {
	children: any;
};
const Protected: React.FC<ProtectedProps> = function (props) {
	const loginContext = useContext(LoginContext);

	useEffect(() => {
		loginContext?.signIn();
	}, [loginContext]);

	if (loginContext?.signedIn) return <>{props.children}</>;
	else return <Navigate to='/auth' />;
};

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
				<Route path='/about' element={<About />} />
				<Route
					path='/articles/create'
					element={
						<Protected>
							<ArticleCreate />
						</Protected>
					}
				/>
				<Route path='/articles/:articleId' element={<ArticleDetail />} />
				<Route
					path='/articles/list'
					element={
						<Protected>
							<MyArticles />
						</Protected>
					}
				/>
				<Route
					path='/articles/edit'
					element={
						<Protected>
							<ArticleEdit />
						</Protected>
					}
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
