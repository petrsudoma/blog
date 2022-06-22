import { Drawer } from '@mui/material';

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
	return (
		<Drawer open={props.active} anchor={'right'} onClose={props.handleDrawer}>
			<DrawerMenuComponent>
				<CloseButton onClick={props.handleDrawer} />
				<DrawerList>
					<DrawerListItem>
						<DrawerLink to='/'>My Articles</DrawerLink>
					</DrawerListItem>
					<DrawerListItem>
						<DrawerLink to='/'>Create Article</DrawerLink>
					</DrawerListItem>
					<DrawerListItem>
						<LogoutButton onClick={props.logout}>Logout</LogoutButton>
					</DrawerListItem>
				</DrawerList>
			</DrawerMenuComponent>
		</Drawer>
	);
};

export default DrawerMenu;
