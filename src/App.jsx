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
import SignUp from "./Components/SignUp";


function App() {
  return (
			<>	
				<Navbar />
				<Login/>
				<Footer/>
			</>
		);
}

export default App;