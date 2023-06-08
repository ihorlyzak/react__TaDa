import { Button } from '@mui/material';
import { styled } from '@mui/system';

export const TaDaButton = ({ text, onClick, props }) => {
	return (
		<CustomButton onClick={onClick} {...props}>
			{text}
		</CustomButton>
	);
};

const CustomButton = styled(Button)(({ theme }) => ({
	width: '100%',
	color: theme.palette.primary.main,
	backgroundColor: theme.palette.primary.secondary,
	padding: theme.spacing(1, 2),
	borderRadius: theme.shape.borderRadius,
	'&:hover': {
		backgroundColor: theme.palette.secondary.main,
	},
}));
