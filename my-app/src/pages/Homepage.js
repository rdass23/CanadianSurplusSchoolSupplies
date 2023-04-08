import React from 'react';
import {
	Typography,
	Container,
	Card,
	CardContent,
	Grid,
	CardActionArea,
} from '@mui/material';
import { products } from '../components/Catalogue';

import AspectRatio from '@mui/joy/AspectRatio';

function Homepage() {
	return (
		<Container component="main" maxWidth="xl">
			<Typography variant="h2" align="left" py={12}>
				Our Best Sellers
			</Typography>

			<Grid container alignContent="center" spacing={24} columns={9}>
				{products.map((product, idx) => (
					<Grid item md={3} key={idx}>
						<Card sx={{ width: 300, height: 300 }}>
							<CardActionArea href={`/item/${product.id}`}>
								<AspectRatio objectFit="contain">
									<img src={product.image} alt={product.name} />
								</AspectRatio>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										{product.name}
									</Typography>
									<Typography variant="h6">${product.price}</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

export default Homepage;
