import React from 'react';
import Image from 'pimg';

import Sidebar from '../Sidebar/Sidebar';
import horizontalLineIcon from '../Sidebar/horizontal-line.svg';

import Jobs from './jobs.json';

import './Work.scss';

export default () => (
	<div className="work page" id="work">
		<Sidebar page="work" />
		<main>
			{Jobs.map(
				(
					{
						aboutCompany,
						companyName,
						image,
						imagePlaceholder,
						role,
						roleDescription,
						technologies,
						website
					},
					key
				) => (
					<div className="work__box" key={key}>
						<div className="work__box__image">
							<Image
								className="work--image"
								src={image}
								placeholder={imagePlaceholder}
							/>
						</div>
						<div className="work__box__description">
							<h2>{companyName}</h2>
							<h4> — {role}</h4>
							<p>{aboutCompany}</p>
							<p>{roleDescription}</p>
							<img
								src={horizontalLineIcon}
								alt="horizontal line icon"
								className="intro--icon"
							/>
							<p>{technologies}</p>
							{website && <a href={website}>Explore</a>}
						</div>
					</div>
				)
			)}
		</main>
	</div>
);
