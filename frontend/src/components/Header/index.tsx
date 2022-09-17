import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginContext } from '../../context/login';
import DrawerMenu from '../DrawerMenu';
import {
	HeaderComponent,
	Link,
	Logo,
	SignInIcon,
	SignInLink,
	LogoutButton,
	BurgerMenu,
	LinksWrapper,
	ImageLink,
} from './components';

function Header() {
	const [drawer, setDrawer] = useState<boolean>(false);
	const navigate = useNavigate();
	const loginContext = useContext(LoginContext);

	function handleDrawer() {
		setDrawer((prevState) => !prevState);
	}

	function logout() {
		navigate('/');
		if (loginContext) {
			loginContext.logout();
		}
	}

	return (
		<HeaderComponent>
			<LinksWrapper>
				<ImageLink to='/'>
					<Logo />
				</ImageLink>

				<Link to='/'>Recent articles</Link>
				<Link to='/about'>About</Link>
			</LinksWrapper>

			{loginContext?.signedIn ? (
				<LinksWrapper>
					<Link to='/articles/list'>My Articles</Link>
					<Link to='/articles/create'>Create Article</Link>
					<LogoutButton onClick={logout} headerVariant>
						Logout
					</LogoutButton>
					<BurgerMenu onClick={handleDrawer} />
					<DrawerMenu
						active={drawer}
						logout={() => {
							loginContext.logout();
							handleDrawer();
						}}
						handleDrawer={handleDrawer}
					/>
				</LinksWrapper>
			) : (
				<SignInLink to='/auth'>
					Sign in
					<SignInIcon />
				</SignInLink>
			)}
		</HeaderComponent>
	);
}

export default Header;
