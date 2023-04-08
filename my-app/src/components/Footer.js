import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function Footer() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '38vh',
			}}
		>
			<Box
				component="footer"
				sx={{
					py: 3,
					px: 2,
					mt: 'auto',
					backgroundColor: (theme) =>
						theme.palette.mode === 'light'
							? theme.palette.grey[200]
							: theme.palette.grey[800],
				}}
			>
				<Container maxWidth="sm">
					<Typography variant="body1">
						© Copyright Canadian Surplus School Supplies
					</Typography>
				</Container>
			</Box>
		</Box>
	);
}

export default Footer;
