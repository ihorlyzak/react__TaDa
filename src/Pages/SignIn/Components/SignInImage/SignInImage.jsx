import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';

import { Typography } from '@mui/material';

import styled from 'styled-components';

import { SignInImageBox } from './SignInImageBox';

export const SignInImage = () => {
	return (
		<SignInImageBox>
			<SportsBaseballIcon
				sx={{
					color: '#ff4d01',
					fontSize: '12rem',
				}}
			/>
			<SignInImageTitle>Tada</SignInImageTitle>
		</SignInImageBox>
	);
};

const SignInImageTitle = styled(Typography).attrs(props => {
	return {
		variant: props.variant || 'h2',
		component: props.component || 'h2',
	};
})({
	color: '#fff',
	fontWeight: '700',
});
