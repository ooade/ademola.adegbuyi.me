import React from 'react';

import horizontalLineIcon from './horizontal-line.svg';
import './Sidebar.scss';

export default ({ page }) => (
	<div className="sidebar">
		<img
			src={horizontalLineIcon}
			alt="horizotal line icon"
			className="page--icon"
		/>
		<p className="page--text">{page}</p>
	</div>
);
