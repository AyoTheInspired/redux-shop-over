import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={ProductListing} />
					<Route path="/product/:productId" exact component={ProductDetail} />
					{/* <Route>404 Not Found</Route> */}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
