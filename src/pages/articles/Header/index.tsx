import { HeaderComponent, Link, Logo, SignInIcon, SignInLink } from './components';

function Header() {
	return (
		<HeaderComponent>
			<Logo />
			<Link>Recent Articles</Link>
			<Link>About</Link>
			<SignInLink>
				Log in
				<SignInIcon />
			</SignInLink>
		</HeaderComponent>
	);
}

export default Header;
