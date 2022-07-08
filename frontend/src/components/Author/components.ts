import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 10px 0;

	@media only screen and (max-width: 550px) {
		margin: 5px 0;
	}
`;

export const AuthorComponent = styled.p`
	font-size: 0.6em;
	font-weight: 300;
	color: #6c757d;

	@media only screen and (max-width: 550px) {
		font-size: 0.4em;
	}
`;

export const Bullet = styled.p`
	margin: 0 10px;
	color: #6c757d;

	@media only screen and (max-width: 550px) {
		margin: 0 5px;
	}
`;

export const CreationDate = styled.p`
	font-size: 0.6em;
	font-weight: 300;
	color: #6c757d;

	@media only screen and (max-width: 550px) {
		font-size: 0.4em;
	}
`;
