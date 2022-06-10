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
	width: 80%;
	margin: 0 auto;
`;
