import React, { useState } from 'react';
import {
	Typography,
	Container,
	Button,
	Grid,
	Paper,
	TextField,
	IconButton,
	Modal,
	Box,
	MenuItem,
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

	const modal = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		boxShadow: 24,
		p: 4,
	};

	const [editOpen, setEditOpen] = useState(false);
	const handleEditOpen = () => setEditOpen(true);
	const handleEditClose = () => setEditOpen(false);

	const [removeOpen, setRemoveOpen] = useState(false);
	const handleRemoveOpen = () => setRemoveOpen(true);
	const handleRemoveClose = () => setRemoveOpen(false);

	const [emptyOpen, setEmptyOpen] = useState(false);
	const handleEmptyOpen = () => setEmptyOpen(true);
	const handleEmptyClose = () => setEmptyOpen(false);

	const cart = JSON.parse(localStorage.getItem('cart') || '[]');

	const [quantity, setQuantity] = useState();

	const handleChange = (event) => {
		setQuantity(event.target.value);
	};

	const emptyCart = () => {
		localStorage.removeItem('cart');
		window.location.reload(true);
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
					<Button variant="outlined" color="error" onClick={handleEmptyOpen}>
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
							<Grid container spacing={4} alignItems="center">
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
									<Grid item xs>
										<Button
											variant="text"
											color="info"
											onClick={handleEditOpen}
										>
											Edit Item
										</Button>
									</Grid>
									<Grid item>
										<IconButton onClick={handleRemoveOpen}>
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
			<Modal
				open={editOpen}
				onClose={handleEditClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={modal}>
					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h2"
						textAlign="center"
					>
						Edit [Item]
					</Typography>
					<TextField margin="normal" required fullWidth label="Pen Colour" />
					<TextField margin="normal" required fullWidth label="Ink Colour" />
					<Grid container spacing={3} wrap="nowrap" alignItems="center">
						<Grid item xs>
							<Button onClick={handleEditClose} fullWidth variant="outlined">
								Cancel
							</Button>
						</Grid>
						<Grid item xs={6}>
							<Button fullWidth onClick={handleEditClose} variant="contained">
								Update Item
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Modal>
			{/* Modal for making sure you want to remove an item from cart */}
			<Modal
				open={removeOpen}
				onClose={handleRemoveClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={modal}>
					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h2"
						textAlign="center"
					>
						Remove [Item] from Cart
					</Typography>
					<Typography
						id="modal-modal-title"
						variant="body1"
						component="h2"
						textAlign="center"
						py={2}
					>
						Are you sure you want to remove this item from your cart?
					</Typography>
					<Grid container spacing={3} wrap="nowrap" alignItems="center">
						<Grid item xs>
							<Button onClick={handleRemoveClose} fullWidth variant="outlined">
								Cancel
							</Button>
						</Grid>
						<Grid item xs={6}>
							<Button fullWidth onClick={handleRemoveClose} variant="contained">
								Yes, Remove item
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Modal>
			{/* Modal for making sure you want empty your cart */}
			<Modal
				open={emptyOpen}
				onClose={handleEmptyClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={modal}>
					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h2"
						textAlign="center"
					>
						Empty cart
					</Typography>
					<Typography
						id="modal-modal-title"
						variant="body1"
						component="h2"
						textAlign="center"
						py={2}
					>
						Are you sure you want to empty all products from your cart?
					</Typography>
					<Grid container spacing={3} wrap="nowrap" alignItems="center">
						<Grid item xs>
							<Button onClick={handleEmptyClose} fullWidth variant="outlined">
								Cancel
							</Button>
						</Grid>
						<Grid item xs={6}>
							<Button fullWidth onClick={emptyCart} variant="contained">
								Yes, Empty Cart
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Modal>
		</Container>
	);
}
