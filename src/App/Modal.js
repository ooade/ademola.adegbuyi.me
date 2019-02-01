import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.scss';
import clearIcon from './clear-icon.svg';
import { SocialLinks } from '../Footer/Footer';

const Modal = ({ handleModal }) => {
	window.addEventListener('keydown', e => {
		if (e.key === 'Escape' || e.keyCode === 27) {
			handleModal(false);
		}
	});

	const menuItems = [
		{
			permalink: '#intro',
			title: 'Introduction'
		},
		{
			permalink: '#work',
			title: 'Selected works'
		},
		{
			permalink: '#open-source',
			title: 'Open Source Projects'
		},
		{
			permalink: '#talks',
			title: 'Talks'
		}
	];

	return ReactDOM.createPortal(
		<div className="modal">
			<div className="modal__header">
				<img
					src={clearIcon}
					alt="clear icon"
					onClick={() => handleModal(false)}
					className="modal__header--icon"
				/>
			</div>
			<div className="modal__body">
				<ul className="modal__list">
					{menuItems.map(({ permalink, title }, key) => (
						<li key={key}>
							<a href={permalink}>{title}</a>
						</li>
					))}
				</ul>
				<ul className="modal__social">
					{SocialLinks.map(({ href, text }, key) => (
						<li key={key}>
							<a href={href} target="_blank" rel="noopener noreferrer">
								{text}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>,
		document.querySelector('#modal')
	);
};

export default Modal;
