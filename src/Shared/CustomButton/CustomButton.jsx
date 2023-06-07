import { Button } from '@mui/material';

export const CustomButton = ({ text, color, clickHandler, type, className, size, sx }) => {
    return (
        <Button
            color={color}
            onClick={clickHandler}
            type={type}
            className={className}
            sx={sx}
            size={size}
        >
            {text}
        </Button>
    )
}
