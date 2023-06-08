import { SignInBox, SignInGrid, SignInImage } from './Components';
import { SignInForm } from './Components/SignInForm/SignInForm';

export const SignIn = () => (
	<SignInGrid container>
		<SignInBox>
			<SignInImage />

			<SignInForm />
		</SignInBox>
	</SignInGrid>
);
