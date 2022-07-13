import styled from 'styled-components';

type PageHeadingProps = {
	children: React.ReactNode;
	className?: string;
};
const PageHeading: React.FC<PageHeadingProps> = function (props) {
	return <PageHeadingComponent className={props.className}>{props.children}</PageHeadingComponent>;
};

export default PageHeading;

const PageHeadingComponent = styled.h1`
	font-size: 1.3em;
	margin-top: calc(50px + 1%);
	white-space: nowrap;

	@media only screen and (max-width: 400px) {
		font-size: 1em;
		margin-top: calc(50px + 20%);
	}
`;
