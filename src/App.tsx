import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Articles from './pages/Articles';
import Signin from './pages/Signin';
import Header from './components/Header';
import { LoginContext } from './context/login';

function App() {
	const loginContext = useContext(LoginContext);

	useEffect(() => {
		loginContext?.signIn();
	}, [loginContext]);

	return (
		<Layout>
			<Header />
			<Routes>
				<Route path='/' element={<Articles />} />
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
