import { AuthorComponent, Bullet, CreationDate, Wrapper } from './components';

type AuthorProps = {
	children: React.ReactNode;
	date: string;
};
const Author: React.FC<AuthorProps> = function (props) {
	const { date, children } = props;

	return (
		<Wrapper>
			<AuthorComponent>{children}</AuthorComponent>
			<Bullet>&bull;</Bullet>
			<CreationDate>
				{`${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
					date
				).getFullYear()}`}
			</CreationDate>
		</Wrapper>
	);
};

export default Author;
