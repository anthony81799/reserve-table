import React from "react";
import "../styles/LittleLemon.css";
import { useState } from "react";

export const BookingForm = (props) => {
	const [occasion, setOccasion] = useState("");
	const [guests, setGuests] = useState("");
	const [date, setDate] = useState("");
	const [times, setTimes] = useState("");

	const handleSumbit = (e) => {
		e.preventDefault();
		props.submitForm(e);
	};

	const handleChange = (e) => {
		setDate(e);
		props.dispatch(e);
	};

	return (
		<form style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={handleSumbit} id="booking-form">
			<label htmlFor="res-date">Choose date</label>
			<input
				id="res-date"
				value={date}
				onChange={(e) => handleChange(e.target.value)}
				type="date"
				required
			/>
			<label htmlFor="res-time">Choose time</label>
			<select
				id="res-time"
				value={times}
				onChange={(e) => setTimes(e.target.value)}
				required
			>
				<option value="">Select a Time</option>
				{props.availableTimes.availableTimes.map((availableTimes) => {
					return <option key={availableTimes}>{availableTimes}</option>;
				})}
			</select>
			<label htmlFor="guests">Number of guests</label>
			<input
				id="guests"
				min="1"
				value={guests}
				onChange={(e) => {
					setGuests(e.target.value);
				}}
				type={"number"}
				placeholder={0}
				max={10}
				required
			/>
			<label htmlFor="occasion">Occasion</label>
			<select
				id="occasion"
				key={occasion}
				value={occasion}
				onChange={(e) => setOccasion(e.target.value)}
				required
			>
				<option value="">Select an Option</option>
				<option>Birthday</option>
				<option>Anniversary</option>
			</select>
			<input
				aria-label="On Click"
				type={"submit"}
				value={"Make Your Reservation"}
        id="submitButton"
			/>
		</form>
	);
};
