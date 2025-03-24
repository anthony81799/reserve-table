import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react";

function App() {
	const initialState = { availableTimes: fetchAPI(new Date()) };
	const [state, dispatch] = useReducer(updateTimes, initialState);

	function updateTimes(state, date) {
		return { availableTimes: fetchAPI(new Date(date)) };
	}
	const navigate = useNavigate();
	function submitForm(formData) {
		if (submitAPI(formData)) {
			navigate("/confirmed");
		}
	}

	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/about" element={<Main />} />
				<Route path="/menu" element={<Main />} />
				<Route
					path="/booking"
					element={
						<BookingPage
							availableTimes={state}
							dispatch={dispatch}
							submitForm={submitForm}
						/>
					}
				/>
				<Route path="/order-online" element={<Main />} />
				<Route path="/login" element={<Main />} />
				<Route path="/confirmed" element={<ConfirmedBooking/> } />
			</Routes>
		</>
	);
}

export default App;
