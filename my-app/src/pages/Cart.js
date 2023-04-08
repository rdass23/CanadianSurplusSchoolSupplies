import React, { useState } from 'react';
import {
	Typography,
	Container,
	Button,
	Grid,
	Paper,
	TextField,
	IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Cart() {
	const Img = styled('img')({
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	});

	const cart = JSON.parse(localStorage.getItem('cart') || '[]');

	const [quantity, setQuantity] = useState();

	const handleChange = (event) => {
		setQuantity(event.target.value);
	};

	const emptyCart = () => {
		localStorage.removeItem('cart');
		window.location.reload();
	};

	const removeFromCart = (productToRemove) => {
		cart.filter((product) => product !== productToRemove);
	};

	const getCartTotal = () => {
		var total = 0;

		cart.forEach((item) => {
			total += item.price * item.quantity;
		});

		return total.toFixed(2);
	};

	return (
		<Container component="main" maxWidth="lg">
			<Typography variant="h2" align="center" py={12}>
				My Cart
			</Typography>

			{/* When user has nothing in cart display message saying so */}
			{cart.length !== 0 ? (
				<Grid textAlign="center">
					<Button variant="outlined" color="error" onClick={emptyCart}>
						Empty Cart
					</Button>
					{cart.map((product, idx) => (
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
												{product.name}
											</Typography>

											<Typography variant="body2" color="text.secondary">
												{product.description}
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
									<Grid item xs container direction="column" spacing={2}>
										<Grid item xs>
											<TextField
												onChange={handleChange}
												id="outlined-number"
												type="number"
												defaultValue={product.quantity}
												size="small"
												InputProps={{
													inputProps: { min: product.minQuant },
												}}
											/>
										</Grid>
									</Grid>
									<Grid item textAlign="center">
										<IconButton onClick={() => removeFromCart(product)}>
											<DeleteIcon />
										</IconButton>
										<h5>Remove item from Cart</h5>
									</Grid>
								</Grid>
							</Grid>
						</Paper>
					))}
					<Grid container spacing={3} justifyContent="end" flexDirection="row">
						<Grid item>
							<Typography variant="h4" pt={3}>
								Total Cost: ${getCartTotal()}
							</Typography>
						</Grid>

						<Grid item container justifyContent="end">
							<Button
								href="/checkout"
								variant="contained"
								color="secondary"
								sx={{ marginBottom: 2 }}
							>
								Proceed to Checkout
							</Button>
						</Grid>
					</Grid>
				</Grid>
			) : (
				<>
					<Typography variant="h6" align="center">
						You currently have nothing in your cart.
					</Typography>
				</>
			)}
		</Container>
	);
}
