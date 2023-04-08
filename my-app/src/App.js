import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Topbar from './components/Topbar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import Item from './components/Item';
import Catalogue from './components/Catalogue';
import { useState } from 'react';
import OrderHistory from './pages/OrderHistory';

function App() {
	const [cart, setCart] = useState([]);

	return (
		<Router>
			<Topbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/catalogue" element={<Catalogue />} />
				<Route path="/item/:id" element={<Item />} />
				<Route path="/orderhistory" element={<OrderHistory />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;

// import React, { useState } from 'react';
// import './App.css';
// import Products from './components/Products';
// import Cart from './pages/Cart';

// function App() {
// 	const [cart, setCart] = useState([]);

// 	const getCartTotal = () => {
// 		return cart.reduce((sum, { quantity }) => sum + quantity, 0);
// 	};

// 	return (
// 		<div className="App">
// 			{<Products cart={cart} setCart={setCart} />}
// 			{<Cart cart={cart} setCart={setCart} />}
// 			{/* <header>
// 				<button onClick={() => navigateTo(PAGE_CART)}>
// 					Go to Cart ({getCartTotal()})
// 				</button>

// 				<button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
// 			</header>
// 			{page === PAGE_PRODUCTS && <Products cart={cart} setCart={setCart} />}
// 			{page === PAGE_CART && <Cart cart={cart} setCart={setCart} />} */}
// 		</div>
// 	);
// }

// export default App;
