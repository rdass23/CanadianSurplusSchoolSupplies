import React from 'react';
import {
	Typography,
	Container,
	Button,
	Grid,
	Paper,
	Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { products } from '../components/Catalogue';

function OrderHistory() {
	const Img = styled('img')({
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	});

	const order = products.filter((x) => x.id === '1');

	return (
		<Container component="main" maxWidth="lg">
			<Typography variant="h2" align="center" py={12}>
				Order History
			</Typography>

			<Grid textAlign="center">
				{order.map((product, idx) => (
					<Paper
						sx={{
							p: 2,
							my: 4,
							flexGrow: 1,
							maxWidth: 'lg',
						}}
						key={idx}
					>
						<Grid container spacing={4}>
							<Grid item>
								<Img
									alt={product.name}
									src={product.image}
									sx={{ width: 128, height: 128 }}
								/>
							</Grid>
							<Grid item xs={12} sm container>
								<Grid item xs container direction="column" spacing={2}>
									<Grid item xs>
										<Typography
											gutterBottom
											variant="subtitle1"
											component="div"
										>
											Order #1923129832
										</Typography>

										<Typography variant="body2" color="text.secondary">
											04/02/2023
										</Typography>
									</Grid>
								</Grid>
								<Grid item xs container direction="column" spacing={2}>
									<Grid item xs>
										<Typography gutterBottom variant="h6" component="div">
											${product.price}
										</Typography>
									</Grid>
								</Grid>
								<Grid item>
									<Stack
										direction="column"
										alignItems="center"
										gap={1}
										paddingTop={2}
									>
										<Button variant="contained" size="medium">
											More Details
										</Button>
										<Button variant="outlined" size="medium">
											Buy it again
										</Button>
									</Stack>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				))}
			</Grid>
		</Container>
	);
}

export default OrderHistory;
