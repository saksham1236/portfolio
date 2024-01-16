//Importing Styles
import "./styles/global.scss";
//Importing dependencies
import { HashRouter, Routes, Route } from "react-router-dom";

//Importing Components
import Nav from "./components/Nav/Nav";

//Importing Pages
import Home from "./pages/Home/Home";

function App() {
	return (
		<HashRouter>
			<section className='nav-container'>
				<Nav />
			</section>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
			</Routes>
		</HashRouter>
	);
}

export default App;
