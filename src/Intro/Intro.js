import React from 'react';
import Image from 'pimg';
import Sidebar from '../Sidebar/Sidebar';

import './Intro.scss';

import horizontalLineIcon from '../Sidebar/horizontal-line.svg';

export default () => (
	<div className="intro page" id="intro">
		<Sidebar page="Introduction" />
		<main>
			<h1>Ademola Adegbuyi</h1>
			<h3>Frontend Engineer, Paystack</h3>
			<img
				src={horizontalLineIcon}
				alt="horizontal line icon"
				className="intro--icon"
			/>
			<p className="intro__about">
				A 23 years old developer based in Lagos, Nigeria. Loves working with
				bleeding edge technologies, playing around with these new technologies,
				and making sure developers understand and use them efficiently and
				effectively. I'm also a React.js Learning Community lead for Facebook
				Developer Circle.
			</p>
			<div className="intro__pluralsight">
				<p className="pluralsight__IQ">
					<a href="https://app.pluralsight.com/profile/ademola">
						Expert In JavaScript and React.js
					</a>
					on
				</p>
				<Image
					className="pluralsight--logo"
					src="https://res.cloudinary.com/stackpie/image/upload/v1549002879/portfolio/ps_logo_f-03.png"
					placeholder="https://res.cloudinary.com/stackpie/image/upload/c_thumb,w_10/v1549002879/portfolio/ps_logo_f-03.png"
					alt="pluralsight logo"
				/>
			</div>
			<div className="intro__cli_graphql">
				Also available as CLI <code>npx ademola</code> and <a href="https://ademola.adegbuyi.me/graphql">GraphQL PlayGround.</a>
			</div>
		</main>
	</div>
);
