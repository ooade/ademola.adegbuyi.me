import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';
import clearIcon from './clear-icon.svg';

const Modal = ({ handleModal }) => {
	window.addEventListener('keydown', e => {
		if (e.key === 'Escape' || e.keyCode === 27) {
			handleModal(false);
		}
	});

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
				<ul>
					<li>
						<a href="#intro">Introduction</a>
					</li>
					<li>
						<a href="#work">Selected Works</a>
					</li>
					<li>
						<a href="#open-source">Open Source Projects</a>
					</li>
				</ul>
			</div>
		</div>,
		document.querySelector('#modal')
	);
};

export default Modal;
