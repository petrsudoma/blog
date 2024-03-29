import { OptionsObject, SnackbarMessage } from 'notistack';

export function fetchError(): [SnackbarMessage, OptionsObject] {
	const message: SnackbarMessage = 'Error. Refresh page';
	const options: OptionsObject = { variant: 'error' };

	return [message, options];
}

export function uploadError(): [SnackbarMessage, OptionsObject] {
	const message: SnackbarMessage = 'Error. Try again';
	const options: OptionsObject = { variant: 'error' };

	return [message, options];
}
