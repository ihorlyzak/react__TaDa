import { TaDaButton } from 'Shared';

import { SignInFormBox } from './SignInFormBox';
import { SignInFormInput } from './SignInFormInput';

export const SignInForm = () => {
	return (
		<SignInFormBox>
			<SignInFormInput
				id='outlined-basic'
				label='Login '
				variant='standard'
				size='small'
				type='text'
				name='username'
				// value={loginValues.username}
				// onChange={handleFormChange}
			/>
			<SignInFormInput
				id='outlined-basic'
				label='Password'
				variant='standard'
				size='small'
				type='password'
				name='password'
				// value={loginValues.password}
				// onChange={handleFormChange}
			/>

			<TaDaButton
				size='large'
				variant='text'
				type='submit'
				color='primary'
				text='Sign in'
				// clickHandler={handleSubmit}
			/>
		</SignInFormBox>
	);
};
