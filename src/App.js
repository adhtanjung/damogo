import "./App.scss";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Route path="/" exach component={Landing} />
			<Footer />
		</>
	);
}

export default App;
