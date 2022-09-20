import PageHeading from '../../components/PageHeading';
import { Text, Link } from './components';

function About() {
	return (
		<div>
			<PageHeading>About</PageHeading>

			<Text>
				You are visiting blog website where you can post your own articles (everyone will see it!),
				comment other articles and upvote/downvote them.
			</Text>

			<Text>
				This project is inspired by{' '}
				<Link
					href='https://github.com/Applifting/fullstack-exercise'
					target='_blank'
					rel='noreferrer'
				>
					Applifting assignment
				</Link>{' '}
				but I have done it in my way with some enhancements including custom backend and
				authentication system.
			</Text>

			<Text>
				<Link href='https://github.com/petrsudoma/blog' target='_blank' rel='noreferrer'>
					Project repository
				</Link>
			</Text>

			<Text>
				Petr Šudoma <br />{' '}
				<Link href='https://petrsudoma.com' target='_blank' rel='noreferrer'>
					My portfolio
				</Link>
			</Text>
		</div>
	);
}

export default About;
