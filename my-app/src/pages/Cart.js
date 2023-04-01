import React from 'react';
import { Typography, Container, Box } from '@mui/material';

function Cart() {
	return (
		<Container component="main" maxWidth="xs">
			<Typography variant="h2" align="center" py={12}>
				My Cart
			</Typography>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			></Box>
		</Container>
	);
}

export default Cart;
