import styled from 'styled-components';

import Articles from './pages/articles';

function App() {
	return (
		<Layout>
			<Articles />
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
