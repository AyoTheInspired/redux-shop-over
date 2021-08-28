import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./pages/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";

function App() {
	return (
		<div className="app">
			<Router>
				{/* <Header /> */}
				<Navigation />
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
