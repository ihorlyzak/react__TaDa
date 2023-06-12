import { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const PasswordInput = ({ ...rest }) => {
	const [showPassword, setShowPassword] = useState(false);
	const inputType = showPassword ? 'text' : 'password';

	const handleTogglePasswordVisibility = () =>
		setShowPassword(prevShowPassword => !prevShowPassword);

	const PasswordIcon = (
		<InputAdornment position='end'>
			<IconButton onClick={handleTogglePasswordVisibility} edge='end'>
				{showPassword ? <VisibilityOff /> : <Visibility />}
			</IconButton>
		</InputAdornment>
	);

	return (
		<TextField
			{...rest}
			label='Password'
			type={inputType}
			InputProps={{
				endAdornment: PasswordIcon,
			}}
		/>
	);
};
