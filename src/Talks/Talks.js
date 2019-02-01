import React from 'react';

import './Talks.scss';
import Sidebar from '../Sidebar/Sidebar';
import TalksData from './Talks.json';

export default () => (
	<div className="talks page" id="talks">
		<Sidebar page="talks" />
		<main>
			{TalksData.map(({ link, host, title }, key) => (
				<div key={key} className="talks__box">
					<h3>{title}</h3>
					<p>— {host}</p>
					<a href={link}>Explore.</a>
				</div>
			))}
		</main>
	</div>
);
