import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Faq from "./components/faq";
function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<Main />} />
					<Route exact path="/faq" element={<Faq />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
