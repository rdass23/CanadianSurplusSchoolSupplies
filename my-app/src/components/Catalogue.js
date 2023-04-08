import React, { useState } from 'react';
import {
	Container,
	Typography,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Grid,
	Card,
	CardActionArea,
	CardContent,
	Item,
} from '@mui/material';

import AspectRatio from '@mui/joy/AspectRatio';

export const products = [
	{
		id: '1',
		image:
			'https://cdn.shopify.com/s/files/1/0018/8474/9859/products/SS7353_1200x1200.jpg?v=1661806253',
		name: 'Pencils 10-pack',
		price: 2.99,
		min: '',
		minQuant: 1,
		description: '10 #2 pencils come in this pack.',
	},
	{
		id: '2',
		image:
			'https://pyxis.nymag.com/v1/imgs/5f8/8ac/8e038e47188b15fcb4a1826f5b689a3b83-papermate-inkjoy-pens.rsquare.w600.jpg',
		name: 'Multi-Color pens 18-pack',
		price: 8.99,
		min: '',
		minQuant: 1,
		description: '18 pens of different colours come in this pack.',
	},
	{
		id: '3',
		image:
			'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/613RTkUlLDL._AC_SY355_.jpg',
		name: 'Customizable Pen',
		price: '0.30',
		min: '(Minimum order of 50 pens)',
		minQuant: 50,
		description:
			'Want a customizable pen? Pick your pen colour, ink colour and add an imprint to have your own custom text printed right onto your pen! You can even choose the colour of your imprint text!',
	},
];

function Catalogue() {
	const drawerWidth = 240;
	return (
		<Container component="main" maxWidth="xl">
			<Typography variant="h2" align="center" py={12}>
				Category
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={2}>
					<List sx={{ border: 1, minHeight: 500 }}>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemText primary="Sub-Category 1" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemText primary="Sub-Category 2" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemText primary="Sub-Category 3" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemText primary="Sub-Category 4" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemText primary="Sub-Category 5" />
							</ListItemButton>
						</ListItem>
					</List>
				</Grid>
				<Grid item xs={10} paddingTop={2}>
					<Grid
						container
						justifyContent="center"
						alignContent="center"
						spacing={24}
						columns={10}
					>
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
				</Grid>
			</Grid>
		</Container>
	);
}

export default Catalogue;
