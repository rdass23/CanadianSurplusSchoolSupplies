import React from 'react';
import {
	Typography,
	Box,
	TextField,
	Button,
	Link,
	Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SignUp() {
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		// Add authentication in later version
		navigate('/');
	};
	return (
		<Container component="main" maxWidth="sm">
			<Typography variant="h2" align="center" paddingTop={12}>
				Sign Up
			</Typography>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="fullName"
						label="Full Name"
						name="fullName"
						placeholder="John Doe"
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						placeholder="johndoe@email.com"
					/>

					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password2"
						label="Confirm Password"
						type="password"
						id="password2"
					/>
					<Typography variant="caption" pb={2}>
						Passwords must include at least 1 capital letter, 1 lowercase letter
						and 1 number.
					</Typography>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Sign Up
					</Button>
					<Typography variant="body2" align="center" mt={3}>
						Already have an account?
						<Link href="/signin"> Sign in here!</Link>
					</Typography>
				</Box>
			</Box>
		</Container>
	);
}

export default SignUp;
