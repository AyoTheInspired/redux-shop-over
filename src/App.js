import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./pages/ProductDetail";
import Navigation from "./components/Navigation";
import Cart from "./pages/cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const color = "#444";

	return (
		<div className="app">
			<Router>
				<Navigation />
				<Switch>
					<Route exact path="/" component={ProductListing} />
					<Route exact path="/product/:productId">
						<ProductDetail color={color} />
					</Route>
					{/* <Route exact path="/product/:productId" component={ProductDetail} color={color} /> */}
					<Route exact path="/cart" component={Cart} />
					{/* <Route>404 Not Found</Route> */}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
