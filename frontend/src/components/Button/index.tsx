import React from 'react';
import { ButtonComponent } from './components';

type ButtonProps = {
	children: string;
	className?: string;
	type: 'submit' | 'button';
};
const Button: React.FC<ButtonProps> = function (props) {
	return (
		<ButtonComponent type={props.type} className={props.className}>
			{props.children}
		</ButtonComponent>
	);
};

export { Button };
