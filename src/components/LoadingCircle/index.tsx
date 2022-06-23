import { CircularProgress } from '@mui/material';
import styled from 'styled-components';

function LoadingCircle() {
	return <LoadingCircleComponent />;
}

export default LoadingCircle;

const LoadingCircleComponent = styled(CircularProgress)`
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(50%, -50%);
`;
