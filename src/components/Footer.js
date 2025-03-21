import React from "react";
import "../styles/LittleLemon.css";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import footerLogo from "../assets/Logo .svg";

export const Footer = () => {
	return (
		<footer>
			<div className="footer-content">
				<section className="footer-section">
					<figure>
						<img src={footerLogo} alt="Little Lemon Logo" />
					</figure>
				</section>
				<section className="footer-section">
					<header>
						<h3>Little Lemon</h3>
					</header>
					<nav>
						<ul>
							<li>Home</li>
							<li>About</li>
							<li>Menu</li>
							<li>Reservation</li>
							<li>Order Online</li>
						</ul>
					</nav>
				</section>
				<section className="footer-section">
					<header>
						<h3>Contact</h3>
					</header>
					<article>
						<p>
							Little Lemon
							<br />
							331 E Chicago
							<br />
							LaSalle Street Chicago,
							<br />
							Illinois 60602
							<br />
							USA
							<br />
							Email: jim@rock.com
							<br />
							Phone: (311) 555-2368
							<br />
							Website: littlemon@bookings.com
						</p>
					</article>
				</section>
				<section className="footer-section">
					<header>
						<h3>Social Media</h3>
					</header>
					<div className="social-media-icons">
						<img src={instagram} alt="instagram" />
						<img src={twitter} alt="twitter" />
						<img src={facebook} alt="facebook" />
						<img src={linkedin} alt="linkedin" />
					</div>
				</section>
			</div>
			<section className="footer-copy">
				<p>Copyright &copy; 2024 - Anthony Mason</p>
			</section>
		</footer>
	);
};

export default Footer;
