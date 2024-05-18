import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import ProductCard from "./Components/ProductCard";
import Products from "./Components/Products";
import Footer from "./Components/Footer";

import "./index.css";
import Login from "./Components/Login";
function App() {
  return (
			<>	
				<Navbar />
				<Home />
				<Products/>
				<Footer/>
			</>
		);
}

export default App;