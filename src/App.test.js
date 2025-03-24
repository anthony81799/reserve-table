import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("Renders the Header heading", () => {
	render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
	);

	const headingElement = screen.getByText("Login");
	expect(headingElement).toBeInTheDocument();

	const reserveButton = screen.getByText("Reserve a Table");
	fireEvent.click(reserveButton);

	const headingElementNew = screen.getByText("Choose date");
	expect(headingElementNew).toBeInTheDocument();
});

test("Initialize/Update Times", () => {
	render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
	);

	const testTime = ["Select a Time"];
	userEvent.selectOptions(
		screen.getByLabelText("Choose time"),
		screen.getByRole("option", { name: testTime }),
	);
	expect(screen.getByRole("option", { name: testTime }).selected).toBe(true);
});
