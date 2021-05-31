import "./App.scss";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
	return (
		<>
			<Route path="/" exach component={Landing} />
		</>
	);
}

export default App;
