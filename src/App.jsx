import React from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";

import "./index.css";
import Login from "./Components/Login";
function App() {
  return (
			<>
				<Navbar />
				<Homepage />
        <Login />
			</>
		);
}

export default App;