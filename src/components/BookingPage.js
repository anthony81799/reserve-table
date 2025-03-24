import React from "react";
import "../styles/LittleLemon.css";
import { BookingForm } from "./BookingForm";

export const BookingPage = (props) => {
  return  <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>;
}

export default BookingPage;