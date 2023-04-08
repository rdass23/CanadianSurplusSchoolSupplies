import React, { useState } from 'react';
import './Topbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import {
	Menu,
	MenuItem,
	Fade,
	Button,
	ButtonGroup,
	Divider,
	Box,
	Tooltip,
	IconButton,
	Badge,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Topbar() {
	const navigate = useNavigate();

	var cart = JSON.parse(localStorage.getItem('cart') || '[]');

	// find out if user is logged in on local storage
	const loggedIn = localStorage.getItem('loggedIn');

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleCat = () => {
		navigate('/catalogue');
		setAnchorEl(null);
	};

	const handleLogout = () => {
		localStorage.removeItem('loggedIn');
		navigate('/');
	};

	const handleOrderHistory = () => {
		navigate('/orderhistory');
	};

	const [profileEl, setProfileEl] = useState(null);
	const profileOpen = Boolean(profileEl);
	const handleProfileClick = (event) => {
		setProfileEl(event.currentTarget);
	};
	const handleProfileClose = () => {
		setProfileEl(null);
	};

	return (
		<>
			<div className="topbar">
				<div className="container">
					<Link to="/" style={{ textDecoration: 'none' }}>
						<h1 style={{ color: 'white' }}>Canadian Surplus School Supplies</h1>
					</Link>
				</div>
				<div
					style={{ position: 'relative', textAlign: 'center', color: 'white' }}
				>
					{/* When user is logged in display profile name, when not, display sign in button*/}
					{loggedIn ? (
						<>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									textAlign: 'center',
								}}
							>
								<Tooltip>
									<IconButton
										onClick={handleProfileClick}
										size="small"
										sx={{ ml: 2 }}
										aria-controls={open ? 'account-menu' : undefined}
										aria-haspopup="true"
										aria-expanded={open ? 'true' : undefined}
									>
										<Link to="#" className="topbarText">
											<PersonIcon style={{ color: 'white' }} />
											<h4> Hi, Rebecca! </h4>
										</Link>
									</IconButton>
								</Tooltip>
							</Box>
							<Menu
								anchorEl={profileEl}
								id="account-menu"
								open={profileOpen}
								onClose={handleProfileClose}
								onClick={handleProfileClose}
								PaperProps={{
									elevation: 0,
									sx: {
										overflow: 'visible',
										filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
										mt: 1.5,
										'& .MuiAvatar-root': {
											width: 32,
											height: 32,
											ml: -0.5,
											mr: 1,
										},
										'&:before': {
											content: '""',
											display: 'block',
											position: 'absolute',
											top: 0,
											right: 14,
											width: 10,
											height: 10,
											bgcolor: 'background.paper',
											transform: 'translateY(-50%) rotate(45deg)',
											zIndex: 0,
										},
									},
								}}
								transformOrigin={{ horizontal: 'right', vertical: 'top' }}
								anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
							>
								<MenuItem>Profile</MenuItem>
								<Divider />
								<MenuItem onClick={() => handleOrderHistory()}>
									Order History
								</MenuItem>
								<Divider />
								<MenuItem onClick={handleLogout}>Logout</MenuItem>
							</Menu>
						</>
					) : (
						<Link to="/signin" className="topbarText">
							<PersonIcon style={{ color: 'white' }} />
							<h4> Sign In </h4>
						</Link>
					)}
				</div>
				<div style={{ position: 'relative' }}>
					<Link to="/cart" className="topbarText">
						<Badge badgeContent={cart.length} color="info">
							<ShoppingCartIcon style={{ color: 'white' }} />
						</Badge>
						<h4>Cart</h4>
					</Link>
				</div>
			</div>

			<div className="topbarBottom">
				<ButtonGroup variant="text" aria-label="text button group">
					<Button
						id="fade-button"
						aria-controls={open ? 'fade-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
						sx={{ color: 'black' }}
					>
						Paper
					</Button>
					<Button
						id="fade-button"
						aria-controls={open ? 'fade-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
						sx={{ color: 'black' }}
					>
						Writing
					</Button>
					<Button
						id="fade-button"
						aria-controls={open ? 'fade-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
						sx={{ color: 'black' }}
					>
						Crafts
					</Button>
					<Button
						id="fade-butto"
						aria-controls={open ? 'fade-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
						sx={{ color: 'black' }}
					>
						Organization
					</Button>
					<Button
						id="fade-button"
						aria-controls={open ? 'fade-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
						sx={{ color: 'black' }}
					>
						Folders
					</Button>
					<Button
						id="fade-button"
						aria-controls={open ? 'fade-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
						sx={{ color: 'black' }}
					>
						Binders
					</Button>
				</ButtonGroup>
				<Menu
					id="fade-menu"
					MenuListProps={{
						'aria-labelledby': 'fade-button',
					}}
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					TransitionComponent={Fade}
				>
					<MenuItem onClick={handleCat}>Pens</MenuItem>
					<Divider />
					<MenuItem onClick={handleCat}>Pencils</MenuItem>
					<Divider />
					<MenuItem onClick={handleCat}>Markers</MenuItem>
					<Divider />
					<MenuItem onClick={handleCat}>Highlighters</MenuItem>
				</Menu>
			</div>
		</>
	);
}

export default Topbar;
