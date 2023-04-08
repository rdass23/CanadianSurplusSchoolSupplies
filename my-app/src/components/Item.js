import React, { useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import { useNavigate, useParams } from 'react-router-dom';

import { products } from './Catalogue';

import {
	Container,
	Typography,
	Grid,
	TextField,
	Button,
	Stack,
	Checkbox,
	MenuItem,
	FormControl,
	Select,
} from '@mui/material';

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';

function Item() {
	const { id } = useParams();

	const product = products.filter((x) => x.id === id);

	const [penColor, setPenColor] = useState('white');
	const [inkColor, setInkColor] = useState('black');
	const [imprint, addImprint] = useState(false);
	const [imprintText, setImprintText] = useState('');
	const [imprintColor, setImprintColor] = useState('white');
	const navigate = useNavigate();

	// get default quantity to set it
	const quant = product.find((x) => x.minQuant);

	const [quantity, setQuantity] = useState(quant.minQuant);

	const handleChange = (event) => {
		setQuantity(event.target.value);
	};

	const handlePen = (event) => {
		setPenColor(event.target.value);
	};

	const handleInk = (event) => {
		setInkColor(event.target.value);
	};

	const handleAddImprint = (event) => {
		addImprint(event.target.checked);
	};

	const handleImprint = (event) => {
		setImprintText(event.target.value);
	};

	const handleImprintColor = (event) => {
		setImprintColor(event.target.value);
	};

	const addToCart = (product) => {
		var cart = JSON.parse(localStorage.getItem('cart') || '[]');

		var item = {
			name: product.name,
			image: product.image,
			description: product.description,
			price: product.price,
			minQuant: product.minQuant,
			quantity: quantity,
			penColor: penColor,
			inkColor: inkColor,
			imprintText: imprintText,
			imprintColor: imprintColor,
		};

		cart.push(item);

		// add item to cart in local storage
		localStorage.setItem('cart', JSON.stringify(cart));
		navigate('/');
	};

	return (
		<Container component="main" maxWidth="lg">
			<Typography variant="h2" align="center" py={12}></Typography>
			{product.map((product) => (
				<Grid container spacing={2} key={product.id}>
					<Grid item xs={4}>
						<AspectRatio sx={{ width: 300, height: 200 }} objectFit="contain">
							<img src={product.image} />
						</AspectRatio>
						<Stack direction="row" alignItems="center" gap={1} paddingTop={2}>
							<Typography variant="body1">Quantity: </Typography>
							<TextField
								onChange={handleChange}
								id="outlined-number"
								type="number"
								defaultValue={product.minQuant}
								size="small"
								InputProps={{
									inputProps: { min: product.minQuant },
								}}
							/>
						</Stack>
						{/* Only show custom pen options for custom pen product */}
						{product.name === 'Customizable Pen' && (
							<>
								<Stack
									direction="row"
									alignItems="center"
									gap={1}
									paddingTop={2}
								>
									<Typography variant="body1">Pen Colour:</Typography>
									<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
										<Select
											value={penColor}
											onChange={handlePen}
											displayEmpty
											inputProps={{ 'aria-label': 'Without label' }}
										>
											<MenuItem value={'white'}>
												White <CircleOutlinedIcon />
											</MenuItem>
											<MenuItem value={'black'}>
												Black <CircleIcon color="black" />
											</MenuItem>
											<MenuItem value={'red'}>
												Red <CircleIcon color="error" />
											</MenuItem>
											<MenuItem value={'blue'}>
												Blue <CircleIcon color="primary" />
											</MenuItem>
										</Select>
									</FormControl>
								</Stack>
								<Stack
									direction="row"
									alignItems="center"
									gap={1}
									paddingTop={2}
								>
									<Typography variant="body1">Ink Colour:</Typography>
									<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
										<Select
											value={inkColor}
											onChange={handleInk}
											displayEmpty
											inputProps={{ 'aria-label': 'Without label' }}
										>
											<MenuItem value={'black'}>
												Black <CircleIcon color="black" />
											</MenuItem>
											<MenuItem value={'red'}>
												Red <CircleIcon color="error" />
											</MenuItem>
											<MenuItem value={'blue'}>
												Blue <CircleIcon color="primary" />
											</MenuItem>
										</Select>
									</FormControl>
								</Stack>
								<Stack
									direction="row"
									alignItems="center"
									gap={1}
									paddingTop={2}
								>
									<Typography variant="body1">Add Imprint</Typography>
									<Checkbox onChange={handleAddImprint} />
								</Stack>
								{imprint && (
									<>
										<Stack
											direction="row"
											alignItems="center"
											gap={1}
											paddingLeft={4}
										>
											<Typography variant="body1">Imprint Text: </Typography>
											<TextField
												variant="standard"
												multiline
												onChange={handleImprint}
											/>
										</Stack>
										<Stack
											direction="row"
											alignItems="center"
											gap={1}
											paddingTop={2}
											paddingLeft={4}
										>
											<Typography variant="body1">Imprint Colour:</Typography>
											<FormControl
												variant="standard"
												sx={{ m: 1, minWidth: 120 }}
											>
												<Select
													value={imprintColor}
													onChange={handleImprintColor}
													displayEmpty
													inputProps={{ 'aria-label': 'Without label' }}
												>
													<MenuItem value={'white'}>
														White <CircleOutlinedIcon />
													</MenuItem>
													<MenuItem value={'black'}>
														Black <CircleIcon color="black" />
													</MenuItem>
												</Select>
											</FormControl>
										</Stack>
									</>
								)}
							</>
						)}
					</Grid>
					<Grid item xs={6} align="center">
						<Typography variant="h5">{product.name}</Typography>
						<Typography variant="h5" paddingTop={2}>
							${product.price}
						</Typography>
						<Typography variant="body1" paddingBottom={5}>
							{product.min}
						</Typography>
						<Typography variant="body1" paddingBottom={5}>
							{product.description}
						</Typography>
						<Button
							variant="contained"
							size="large"
							onClick={() => addToCart(product)}
						>
							Add to Cart
						</Button>
					</Grid>
				</Grid>
			))}
		</Container>
	);
}

export default Item;
