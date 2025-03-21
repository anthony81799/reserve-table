import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Reservation from "./components/Reservation";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/about" element={<Main />} />
				<Route path="/menu" element={<Main />} />
				<Route path="/reservation" element={<Reservation />} />
				<Route path="/order-online" element={<Main />} />
				<Route path="/login" element={<Main />} />
			</Routes>
		</>
	);
}

export default App;
