import React, { useState } from 'react';
import {
	Typography,
	Box,
	TextField,
	Button,
	Link,
	Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

/* Sign In Form code via: https://github.com/mui/material-ui/blob/v5.11.14/docs/data/material/getting-started/templates/sign-in/SignIn.js */

function SignIn() {
	const [loggedIn, setLoggedIn] = useState(false);

	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		// Check if email and password are valid, if not display message, if it is, update appbar and redirect to homepage
		if (
			data.get('email') !== 'test@email.com' &&
			data.get('password') !== 'password'
		) {
			setError('Incorrect username or password. Try again.');
		} else {
			localStorage.setItem('loggedIn', true);
			navigate('/');
			window.location.reload();
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			<Typography variant="h2" align="center" paddingTop={12}>
				Sign In
			</Typography>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Box
					component="form"
					onSubmit={handleSubmit}
					validate="true"
					sx={{ mt: 1 }}
				>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<Link variant="body2">Forgot password?</Link>

					{error && (
						<Typography variant="body1" color="red" mt={3}>
							{error}
						</Typography>
					)}

					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Sign In
					</Button>

					<Typography variant="body2" align="center" mt={3}>
						Don't have an account?
						<Link href="/signup"> Sign up here!</Link>
					</Typography>
				</Box>
			</Box>
		</Container>
	);
}

export default SignIn;
