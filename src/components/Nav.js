import React from "react";
import logoImage from "../assets/Logo.svg";
import "../styles/LittleLemon.css";
import { Link } from "react-router-dom";

export const Nav = () => {
	return (
		<nav>
			<div className="logo">
				<img src={logoImage} alt="Logo" />
			</div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/menu">Menu</Link>
				</li>
				<li>
					<Link to="/reservation">Reservation</Link>
				</li>
				<li>
					<Link to="/order-online">Order Online</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
