
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import LoadingBar from "react-top-loading-bar";
import SideBar from "./components/SideBar/SideBar";
import News from "./features/News/News";
import Search from "./features/Search/Search";
import About from "./pages/About/About";
import { navRoute } from "./configs/navConfig";
import "./App.css";
import "./index.css";

const App = () => {

	const pageSize = process.env.REACT_APP_PAGE_SIZE;
	const [progress, setProgress] = useState(0);

	return (
		<div className="App">
			<div>
				<LoadingBar color="#f11946" progress={progress} height={10} />
			</div>
			<Router>
				<SideBar  key={uuidv4()}/>
				<Routes>
					<Route exact path="/about" element={<About />} />
					<Route exact path="/news/search/:query" element={<Search setProgress={setProgress} />} />
					{navRoute.map((path) => (
						<Route
							exact
							key={uuidv4()}
							path={path.path}
							element={
								<News
									setProgress={setProgress}
									key={path.key}
									category={path.category}
									country={path.country}
									pageSize={pageSize}
								/>
						}
						/>
					))}
				</Routes>
			</Router>
		</div>
	);
};

export default App;
