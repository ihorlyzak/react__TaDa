import { Container, Grid, Box, TextField } from '@mui/material/';

// import { useForm } from 'hooks/useForm';
// import { ErrorList } from 'helpers/ErrorList';
// import './SignIn.css';
import { CustomButton } from 'Shared/CustomButton/CustomButton';

export const SignIn = () => {
	// const { handleFormChange, handleSubmit, loginValues, errorsList } =
	// useForm(ErrorList);

	const signInButtonSX = {
		border: '1px solid #bce0fd',
		marginTop: '20px',
	};

	return (
		<Container maxWidth='false'>
			<Grid
				container
				alignItems='center'
				justifyContent='center'
				style={{
					minHeight: '100vh',
				}}
			>
				<Box
					sx={{
						width: '60vw',
						height: '70vh',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						borderRadius: '15px',
						border: '2px solid #bce0fd',
					}}
				>
					<h2>CRUD by Ihor Lyzak</h2>

					<p
						style={{
							border: '1px solid #fff',
							borderRadius: '15px',
							padding: '5px 50px',
							backgroundColor: '#cfe8fc',
						}}
						className='SignInSubHeader'
					>
						Please sign in to view this page.
					</p>

					{/* {errorsList.errors && (
						<p style={{ color: 'red' }}>{errorsList.errors}</p>
					)} */}

					<Box
						component='form'
						sx={{
							margin: 1,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<div>
							<TextField
								sx={{ mb: '5px' }}
								id='outlined-basic '
								label='Login '
								variant='outlined'
								size='small'
								type='text'
								name='username'
								// value={loginValues.username}
								// onChange={handleFormChange}
							/>
						</div>
						{/* {errorsList.username && (
							<p style={{ color: 'red' }}>
								{errorsList.username}
							</p>
						)} */}
						<div>
							<TextField
								sx={{ mb: '5px' }}
								id='outlined-basic'
								label='Password'
								variant='outlined'
								size='small'
								type='password'
								name='password'
								// value={loginValues.password}
								// onChange={handleFormChange}
							/>
						</div>
						{/* {errorsList.password && (
							<p style={{ color: 'red' }}>
								{errorsList.password}
							</p>
						)} */}

						<CustomButton
							sx={signInButtonSX}
							size='large'
							variant='text'
							type='submit'
							color='success'
							// clickHandler={handleSubmit}
							text='Sign in'
						/>
					</Box>
				</Box>
			</Grid>
		</Container>
	);
};
