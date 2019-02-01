import React from 'react';
import './Footer.scss';

export const SocialLinks = [
	{
		href: 'https://github.com/ooade',
		text: 'GitHub'
	},
	{
		href: 'https://twitter.com/_ooade',
		text: 'Twitter'
	},
	{
		href: 'https://linkedin.com/in/ooade',
		text: 'Linkedin'
	},
	{
		href: 'https://www.hackerrank.com/ooade',

		text: 'Hackerrank'
	},
	{
		href: 'https://codepen.io/ademola/',
		text: 'CodePen'
	},
	{
		href: 'https://stackoverflow.com/users/5040413/ademola-adegbuyi',
		text: 'Stack Overflow'
	},
	{
		href: 'https://freecodecamp.com/ooade',
		text: 'Free Code Camp'
	}
];

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
