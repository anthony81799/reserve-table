// import React, { useReducer } from "react";
import "../styles/LittleLemon.css";
import food from "../assets/restauranfood.jpg";
import greeksalad from "../assets/greek salad.jpg";
import bruchetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon dessert.jpg";
import { Footer } from "./Footer";

export const Main = () => {
	return (
		<main>
			<section className="main-section">
				<article className="main-content">
					<h2>Little Lemon</h2>
					<h3>Chicago</h3>
					<p>
						We are a family-owned <br />
						Mediterranean restaurant, <br />
						focused on traditional <br />
						recipes served with a modern <br />
						twist.
					</p>

					<button type="button">Reserve a Table</button>
				</article>
				<figure className="main-image">
					<img src={food} alt="Restaurant food" />
				</figure>
			</section>

			<section className="specials-section">
				<div className="header-container">
					<h2>This Week's Specials!</h2>
					<button type="button">Online Menu</button>
				</div>

				{/* Greek Salad */}
				<div className="article-wrapper">
					<article className="greek-salad">
						<img src={greeksalad} alt="Greek Salad" />
						<div className="article-content">
							<div className="article-header">
								<h3>Greek Salad</h3>
								<p>$12.99</p>
							</div>
							<p>
								The famous greek salad of <br />
								crispy lettuce, peppers, olives,
								<br />
								and our Chicago style feta
								<br />
								cheese, garnished with
								<br />
								crunchy garlic and rosemary
								<br />
								croutons.
							</p>
							<p>Order for Delivery</p>
						</div>
					</article>
				</div>

				{/* Bruchetta */}
				<div className="article-wrapper">
					<article className="Bruchetta">
						<img src={bruchetta} alt="bruchetta" />
						<div className="article-content">
							<div className="article-header">
								<h3>Bruchetta</h3>
								<p>$ 5.99</p>
							</div>
							<p>
								Our Bruchetta is made from
								<br />
								grilled bread that has been
								<br />
								smeared with garlic and
								<br />
								seasoned with salt and olive
								<br />
								oil
							</p>
							<p>Order for Delivery</p>
						</div>
					</article>
				</div>

				{/* Lemon Dessert */}
				<div className="article-wrapper">
					<article className="Bruchetta">
						<img src={lemonDessert} alt="Lemon Dessert" />
						<div className="article-content">
							<div className="article-header">
								<h3>Lemon Dessert</h3>
								<p>$ 5.00</p>
							</div>
							<p>
								This comes straight from
								<br />
								grandma's recipe book, every
								<br />
								last ingredient has been
								<br />
								sourced abd is as authentic
								<br />
								as can be imagined.
							</p>
							<p>Order for Delivery</p>
						</div>
					</article>
				</div>
			</section>

			<Footer />
		</main>
	);
};

export default Main;
