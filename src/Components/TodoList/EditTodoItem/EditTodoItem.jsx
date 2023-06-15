import { useState } from 'react';
import { Edit as EditIcon } from '@mui/icons-material';
import { Button, Paper, TextField } from '@mui/material';

export const EditTodoItem = ({ task, onTaskUpdate }) => {
	const [editTask, setEditTask] = useState({
		name: task.name,
		description: task.description,
	});

	const handleClick = () => {
		onTaskUpdate(editTask);
	};

	const handleEnterClick = e => {
		if (e.key === 'Enter') {
			handleClick();
		}
	};

	const handleChange = e =>
		setEditTask({ ...task, [e.target.name]: e.target.value });

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
			}}
		>
			<TextField
				value={editTask.name}
				onChange={handleChange}
				onKeyDown={handleEnterClick}
				label='name'
				name='name'
				sx={{ width: '300' }}
			/>
			<TextField
				value={editTask.description}
				onChange={handleChange}
				onKeyDown={handleEnterClick}
				label='description'
				name='description'
				sx={{ width: '300' }}
			/>

			<Button
				startIcon={<EditIcon />}
				variant='outlined'
				onClick={handleClick}
			>
				Edit
			</Button>
		</Paper>
	);
};
