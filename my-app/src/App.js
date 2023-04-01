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

function App() {
	return (
		<Router>
			<Topbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/item" element={<Item />} />
				<Route path="/catalogue" element={<Catalogue />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
