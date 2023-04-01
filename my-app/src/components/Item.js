import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';

import {
	Container,
	Typography,
	MenuItem,
	FormControl,
	InputLabel,
	Select,
	Grid,
	TextField,
} from '@mui/material';

function Item() {
	const [quantity, setQuantity] = React.useState('');

	const handleChange = (event) => {
		setQuantity(event.target.value);
	};

	return (
		<Container component="main" maxWidth="lg">
			<Typography variant="h2" align="center" py={12}></Typography>
			<Grid container spacing={2}>
				<Grid item xs={2}>
					<AspectRatio sx={{ width: 300, height: 200 }} objectFit="contain">
						<img src="https://cdn.shopify.com/s/files/1/0018/8474/9859/products/SS7353_1200x1200.jpg?v=1661806253" />
					</AspectRatio>
					<TextField
						id="outlined-number"
						label="Quantity"
						type="number"
						defaultValue="1"
						size="small"
						InputProps={{
							inputProps: { min: 1 },
						}}
					/>
				</Grid>
				<Grid item xs={10}>
					<Typography variant="h5" align="center">
						[Product Name]
					</Typography>
					<Typography variant="body1" align="center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
						vitae congue augue, at interdum est. Quisque tincidunt augue nec
						tincidunt placerat. Cras cursus varius sapien maximus interdum.
						Vivamus purus dolor, egestas ut sem id, dictum ultrices neque. Ut
						tempor eget dui vitae dictum. Integer nec nulla tempor, posuere odio
						pellentesque, efficitur eros. Nullam sed varius justo. Aliquam et
						purus erat. Aliquam interdum imperdiet nisl, a cursus sem feugiat
						et. Ut vestibulum, est eget aliquet sollicitudin, justo sem pharetra
						velit, non pellentesque dui est dignissim felis. Curabitur sed erat
						feugiat, tristique lectus vel, rutrum turpis. Nulla facilisi. Nunc
						nisl tortor, molestie sagittis nisl a, commodo finibus lacus. Cras
						mollis venenatis tellus et condimentum. Phasellus ut sapien eu
						tortor hendrerit facilisis at eget tortor. Vestibulum est massa,
						tempus et rhoncus vitae, dictum non lacus.
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Item;
