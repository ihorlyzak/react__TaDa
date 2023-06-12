import { PasswordInput, TaDaBox, TaDaButton } from 'Shared';

import { TextField } from '@mui/material';

import { AuthFormBox } from './Components/AuthFormBox';

export const AuthForm = () => {
	return (
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
					text='Sign in'
					// clickHandler={handleSubmit}
				/>
			</TaDaBox>
		</AuthFormBox>
	);
};
