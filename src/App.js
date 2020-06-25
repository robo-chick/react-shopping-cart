import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './contexts/ProductContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import Product from './components/Product';
import CartContext from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart({...cart, item});
	};

	const removeItem = itemID => {
		setCart(cart.filter(item => itemID !== item.id));
	};

	return (
		<div className="App">
			<Navigation cart={cart} />
		<ProductContext.Provider value={{products, addItem }}>
			<CartContext.Provider value = {{cart, removeItem}}>

			{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
			</CartContext.Provider>
		</ProductContext.Provider>
		</div>
	);
}

export default App;
