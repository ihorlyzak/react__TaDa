import { Box, IconButton, Paper, Stack, Typography } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';

export const TodoItem = ({ task, removeTask, updateTaskCheck, editTask }) => {
	return (
		<Paper
			elevation={1}
			sx={{
				width: '100%',
				padding: '20px 28px',
				marginTop: '15px',
				borderRadius: 2,
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				gap: 2,
				opacity: task.checked ? 0.5 : 1,
			}}
		>
			<Box textAlign='left'>
				<Typography
					onClick={() => updateTaskCheck(task.id)}
					variant='h6'
					component='h6'
					fontWeight='700'
					sx={{
						cursor: 'pointer',
						textDecorationLine: task.checked
							? 'line-through'
							: 'none',
					}}
				>
					{task.name}
				</Typography>

				<Typography variant='subtitle' component='p'>
					{task.description}
				</Typography>
			</Box>

			<Stack direction='row' spacing={1}>
				<IconButton
					onClick={() => removeTask(task.id)}
					aria-label='delete'
					color='error'
				>
					<DeleteIcon />
				</IconButton>

				<IconButton
					onClick={() => editTask(task.id)}
					aria-label='edit'
					color='primary'
				>
					<EditIcon />
				</IconButton>
			</Stack>
		</Paper>
	);
};
