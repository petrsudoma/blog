import { useContext, useState } from 'react';

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
	const loginContext = useContext(LoginContext);

	function handleDrawer() {
		setDrawer((prevState) => !prevState);
	}

	return (
		<HeaderComponent>
			<LeftLinks>
				<Link to='/'>
					<Logo />
				</Link>

				<Link to='/'>Recent Articles</Link>
				<Link to='/'>About</Link>
			</LeftLinks>

			{loginContext?.signedIn ? (
				<>
					<RightLinks>
						<Link id='right-link' to='/'>
							My Articles
						</Link>
						<Link id='right-link' to='/'>
							Create Article
						</Link>
						<LogoutButton id='right-link' onClick={loginContext.logout}>
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
