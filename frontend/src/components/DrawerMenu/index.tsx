import { Drawer } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LogoutButton } from '../Header/components';

import {
	CloseButton,
	DrawerLink,
	DrawerList,
	DrawerListItem,
	DrawerMenuComponent,
} from './components';

type DrawerMenuProps = {
	active: boolean;
	handleDrawer: () => void;
	logout: () => void;
};
const DrawerMenu: React.FC<DrawerMenuProps> = function (props) {
	const navigate = useNavigate();
	const { handleDrawer } = props;

	function logout() {
		props.logout();
		handleDrawer();
		navigate('/');
	}

	return (
		<Drawer open={props.active} anchor={'right'} onClose={handleDrawer}>
			<DrawerMenuComponent>
				<CloseButton onClick={handleDrawer} />
				<DrawerList>
					<DrawerListItem>
						<DrawerLink onClick={handleDrawer} to='/'>
							Recent articles
						</DrawerLink>
					</DrawerListItem>

					<DrawerListItem>
						<DrawerLink onClick={handleDrawer} to='/about'>
							About
						</DrawerLink>
					</DrawerListItem>

					<DrawerListItem>
						<DrawerLink onClick={handleDrawer} to='/articles/list'>
							My Articles
						</DrawerLink>
					</DrawerListItem>

					<DrawerListItem>
						<DrawerLink onClick={handleDrawer} to='/articles/create'>
							Create Article
						</DrawerLink>
					</DrawerListItem>

					<DrawerListItem>
						<LogoutButton onClick={logout}>Logout</LogoutButton>
					</DrawerListItem>
				</DrawerList>
			</DrawerMenuComponent>
		</Drawer>
	);
};

export default DrawerMenu;
