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
	LeftLinks,
	LogoutButton,
	RightLinks,
	BurgerMenu,
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
			<LeftLinks>
				<Link to='/'>
					<Logo />
				</Link>

				<Link to='/'>Articles</Link>
				<Link to='/about'>About</Link>
			</LeftLinks>

			{loginContext?.signedIn ? (
				<>
					<RightLinks>
						<Link id='right-link' to='/articles/list'>
							My Articles
						</Link>
						<Link id='right-link' to='/articles/create'>
							Create Article
						</Link>
						<LogoutButton id='right-link' onClick={logout}>
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
					</RightLinks>
				</>
			) : (
				<SignInLink to='/signin'>
					Sign in
					<SignInIcon />
				</SignInLink>
			)}
		</HeaderComponent>
	);
}

export default Header;
