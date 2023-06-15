import { PasswordInput, TaDaBox, TaDaButton, AccountActions } from 'Shared';
import { TextField, Typography } from '@mui/material';
import { AuthFormBox } from './Components';

export const AuthForm = ({ signUp = false }) => {
	const authText = signUp ? 'Sign up' : 'Sign in';

	return (
		<AuthFormBox>
			<Typography
				variant='h5'
				component='h5'
				color='var(--orange)'
				fontWeight='700'
				mt={2}
			>
				{authText}
			</Typography>

			<AuthFormBox>
				<TaDaBox width='500px'>
					<TextField
						fullWidth
						id='outlined-basic'
						label='Login '
						variant='standard'
						size='medium'
						type='text'
						name='username'
						margin='normal'
						// value={loginValues.username}
						// onChange={handleFormChange}
					/>

					<PasswordInput
						fullWidth
						id='outlined-basic'
						variant='standard'
						size='medium'
						name='password'
						// value={loginValues.username}
						// onChange={handleFormChange}
					/>

					<TaDaButton
						fullWidth
						style={{ marginTop: '20px' }}
						size='large'
						variant='outlined'
						type='submit'
						color='primary'
						text={authText}
						// clickHandler={handleSubmit}
					/>
				</TaDaBox>

				<AccountActions />
			</AuthFormBox>
		</AuthFormBox>
	);
};
