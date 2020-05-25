import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

import './Intro.scss';

export default () => (
	<div className="intro page" id="intro">
		<Sidebar page="Introduction" />
		<main>
			<h1>Ademola Adegbuyi</h1>
			<h3>Frontend Engineer, Paystack</h3>
		</main>
	</div>
);
