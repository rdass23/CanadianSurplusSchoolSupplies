import React from 'react';
import {
	Container,
	Box,
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
				<Grid item xs={10}>
					<Grid
						container
						justifyContent="center"
						alignContent="center"
						spacing={24}
						columns={10}
					>
						<Grid item md={3}>
							<Card sx={{ width: 300, height: 300 }}>
								<CardActionArea href="/item">
									<AspectRatio objectFit="contain">
										<img src="https://cdn.shopify.com/s/files/1/0018/8474/9859/products/SS7353_1200x1200.jpg?v=1661806253" />
									</AspectRatio>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											Pencils 10-pack
										</Typography>
										<Typography variant="h6">$2.99</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid item md={3}>
							<Card sx={{ width: 300, height: 300 }}>
								<CardActionArea href="/item">
									<AspectRatio objectFit="contain">
										<img src="https://pyxis.nymag.com/v1/imgs/5f8/8ac/8e038e47188b15fcb4a1826f5b689a3b83-papermate-inkjoy-pens.rsquare.w600.jpg" />
									</AspectRatio>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											Multi-Color Pens 18-pack
										</Typography>
										<Typography variant="h6">$8.99</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid item md={3}>
							<Card sx={{ width: 300, height: 300 }}>
								<CardActionArea href="/item">
									<AspectRatio objectFit="contain">
										<img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/613RTkUlLDL._AC_SY355_.jpg" />
									</AspectRatio>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											Customizable Pen
										</Typography>
										<Typography variant="h6">$0.30/pen</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Catalogue;
