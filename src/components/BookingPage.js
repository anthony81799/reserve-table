import React from "react";
import "../styles/LittleLemon.css";
import { BookingForm } from "./BookingForm";
import Footer from "./Footer";

export const BookingPage = (props) => {
	return (
		<>
			<BookingForm
				availableTimes={props.availableTimes}
				dispatch={props.dispatch}
				submitForm={props.submitForm}
			/>
			<Footer />
		</>
	);
};

export default BookingPage;
