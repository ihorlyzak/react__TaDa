import React, { useState } from 'react';
import { TextField, Paper, Button } from '@mui/material';
import { Add } from '@mui/icons-material';

const DEFAULT_TASK = { name: '', description: '' };

export const Panel = ({ createTask }) => {
	const [task, setTask] = useState(DEFAULT_TASK);

	const handleClick = () => {
		createTask(task);
		setTask(DEFAULT_TASK);
	};

	const handleEnterClick = e => {
		if (e.key === 'Enter') {
			handleClick();
		}
	};

	const handleChange = e =>
		setTask({ ...task, [e.target.name]: e.target.value });

	return (
		<Paper
			elevation={3}
			sx={{
				width: '100%',
				padding: '25px 20px',
				borderRadius: 2,
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				gap: 2,
			}}
		>
			<TextField
				value={task.name}
				onChange={handleChange}
				onKeyDown={handleEnterClick}
				label='name'
				name='name'
				sx={{ width: '300' }}
			/>
			<TextField
				value={task.description}
				onChange={handleChange}
				onKeyDown={handleEnterClick}
				label='description'
				name='description'
				sx={{ width: '300' }}
			/>

			<Button
				startIcon={<Add />}
				variant='outlined'
				onClick={handleClick}
			>
				Add
			</Button>
		</Paper>
	);
};
