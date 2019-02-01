import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

import './Intro.scss';

import horizontalLineIcon from '../Sidebar/horizontal-line.svg';

export default () => (
	<div className="intro page">
		<Sidebar page="Introduction" />
		<main>
			<h1>Ademola Adegbuyi</h1>
			<h3>Full Stack Developer</h3>
			<img
				src={horizontalLineIcon}
				alt="horizontal line icon"
				className="intro--icon"
			/>
			<p className="intro__about">
				A 22 years old developer based in Lagos, Nigeria. Loves working with
				bleeding edge technologies, playing around with these new technologies,
				and making sure developers understand and use them efficiently and
				effectively.
			</p>
		</main>
	</div>
);
