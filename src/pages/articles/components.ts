import styled from 'styled-components';

export const Heading = styled.h1`
	font-size: 1.3em;
	margin-top: calc(50px + 5%);

	@media only screen and (max-width: 400px) {
		font-size: 1em;
		margin-top: calc(50px + 20%);
	}
`;
