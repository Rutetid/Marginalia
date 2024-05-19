import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import ProductCard from "./Components/ProductCard";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import Books from "./Components/Books";
import "./index.css";
import Login from "./Components/Login";
import Chatbot from "./Components/Chatbot";


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