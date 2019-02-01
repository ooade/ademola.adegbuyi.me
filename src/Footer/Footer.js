import React from 'react';
import './Footer.scss';

import SocialLinks from './Social.json';

export default () => (
	<footer className="footer page">
		<main>
			<div className="flex">
				<div className="contact">
					<a href="mailto:ooade96@gmail.com">ooade96@gmail.com</a>
				</div>
				<div className="social">
					{SocialLinks.map(({ href, text }, key) => (
						<a key={key} href={href}>
							{text}.
						</a>
					))}
				</div>
			</div>
		</main>
	</footer>
);
