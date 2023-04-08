import {
	Typography,
	Grid,
	TextField,
	Container,
	Box,
	Button,
	Select,
	MenuItem,
	InputAdornment,
	List,
	ListItem,
	Alert,
	AlertTitle,
	CircularProgress,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function Checkout() {
	const cart = JSON.parse(localStorage.getItem('cart') || '[]');

	const [success, setSuccess] = useState(false);
	const navigate = useNavigate();
	console.log(success);

	const handleSubmit = () => {
		setSuccess(true);

		// empty cart
		localStorage.removeItem('cart');

		setTimeout(() => {
			setSuccess(false);
			navigate('/');
		}, 3000);
	};

	const [country, setCountry] = React.useState('');

	const handleChange = (event) => {
		setCountry(event.target.value);
	};

	return (
		<Container component="main" maxWidth="xl">
			<Typography variant="h2" align="center" paddingTop={12}>
				Checkout
			</Typography>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				{success ? (
					<>
						<Alert severity="success" sx={{ mb: 4 }}>
							<AlertTitle>Success</AlertTitle>
							Your order has been successfully placed
						</Alert>
						<CircularProgress />
					</>
				) : (
					<Grid container spacing={2}>
						<Grid item xs={8}>
							<Typography variant="h5" align="left" pb={4}>
								Shipping Address
							</Typography>
							<Grid item xs={12} md={6} pb={4}>
								<TextField
									required
									id="streetAddress"
									label="Street Address"
									variant="outlined"
									fullWidth
								/>
							</Grid>

							<Grid item xs={12} md={6} paddingBottom={4}>
								<TextField
									required
									id="streetAddress2"
									label="Street Address 2"
									variant="outlined"
									fullWidth
								/>
							</Grid>
							<Grid item xs={12} md={6} paddingBottom={4} display="flex">
								<TextField
									required
									id="city"
									label="City"
									variant="outlined"
									fullWidth
									sx={{ mr: 1, minWidth: '25ch' }}
								/>

								<TextField
									required
									id="state"
									label="State/Province"
									variant="outlined"
									fullWidth
									sx={{ ml: 1 }}
								/>
							</Grid>
							<Grid item xs={12} md={6} paddingBottom={4} display="flex">
								<TextField
									required
									id="postalCode"
									label="Posted Code"
									variant="outlined"
									fullWidth
									sx={{ mr: 1 }}
								/>

								<TextField
									value={country}
									onChange={(e) => setCountry(e.target.value)}
									select
									label="Country"
									sx={{ ml: 1, minWidth: '25ch' }}
								>
									<MenuItem value={'Canada'}>Canada</MenuItem>
									<MenuItem value={'United States of America'}>
										United States of America
									</MenuItem>
								</TextField>
							</Grid>
							<Typography variant="h5" align="left" pb={4} pt={6}>
								Payment Details
							</Typography>
							<Grid item xs={12} md={6} pb={4}>
								<TextField
									required
									id="cardName"
									label="Name on card"
									autoComplete="cc-name"
									variant="outlined"
									fullWidth
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<PersonIcon />
											</InputAdornment>
										),
									}}
								/>
							</Grid>

							<Grid item xs={12} md={6} paddingBottom={4}>
								<TextField
									required
									id="cardNumber"
									label="Card number"
									autoComplete="cc-number"
									variant="outlined"
									fullWidth
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<CreditCardIcon />
											</InputAdornment>
										),
									}}
								/>
							</Grid>
							<Grid item xs={12} md={6} paddingBottom={4} display="flex">
								<LocalizationProvider dateAdapter={AdapterDayjs}>
									<DatePicker
										label="Expiry date"
										sx={{ mr: 1, minWidth: '25ch' }}
									/>
								</LocalizationProvider>

								<TextField
									required
									id="cvv"
									label="CVV"
									helperText="Last three digits on signature strip"
									fullWidth
									autoComplete="cc-csc"
									variant="outlined"
									sx={{ ml: 1 }}
								/>
							</Grid>
							<Grid item xs={10} md={6} paddingBottom={4}>
								<Typography variant="h5" align="left" pt={6}>
									Apply Discounts
								</Typography>
								<Typography variant="subtitle2" pb={4}>
									Are you a teacher? Enter your International Teacher Identity
									Card Number below and receive a 10% discount!
								</Typography>
								<TextField
									label="International Teacher Identity Card Number"
									variant="outlined"
									fullWidth
								/>
							</Grid>
						</Grid>
						<Grid item xs={4} justifyContent="end">
							<Box
								sx={{
									border: 1,
									minHeight: 500,
								}}
							>
								<Typography variant="h5" align="center" py={3}>
									Order Summary
								</Typography>
								{cart.map((product, idx) => (
									<Grid container item pb={4} px={2} display="flex" key={idx}>
										<Grid item xs={10} display="flex">
											<Typography variant="body1" sx={{ fontWeight: 'bold' }}>
												{product.name}
											</Typography>
											<Typography ml={1}> x {product.quantity}</Typography>
										</Grid>
										<Grid item xs={2} textAlign="right">
											<Typography variant="body1">{product.price}</Typography>
										</Grid>
									</Grid>
								))}
								<Box
									display="flex"
									justifyContent="center"
									alignItems="center"
									py={4}
								>
									<Button
										type="submit"
										onClick={() => handleSubmit()}
										variant="contained"
										color="secondary"
									>
										Place Order
									</Button>
								</Box>
							</Box>
						</Grid>
					</Grid>
				)}
			</Box>
		</Container>
	);
}

export default Checkout;
