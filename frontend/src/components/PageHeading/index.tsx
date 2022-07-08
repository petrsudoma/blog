import styled from 'styled-components';

type PageHeadingProps = {
	children: React.ReactNode;
};
const PageHeading: React.FC<PageHeadingProps> = function (props) {
	return <PageHeadingComponent>{props.children}</PageHeadingComponent>;
};

export default PageHeading;

const PageHeadingComponent = styled.h1`
	font-size: 1.3em;
	margin-top: calc(50px + 5%);
	white-space: nowrap;

	@media only screen and (max-width: 400px) {
		font-size: 1em;
		margin-top: calc(50px + 20%);
	}
`;
