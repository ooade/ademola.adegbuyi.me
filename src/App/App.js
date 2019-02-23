import React, { useLayoutEffect, useState } from 'react';
import Modal from './Modal';
import Intro from '../Intro/Intro';
import Work from '../Work/Work';
import OpenSource from '../OpenSource/OpenSource';
import Talks from '../Talks/Talks';
import Footer from '../Footer/Footer';

import logoIcon from './logo.png';
import menuIcon from './menu-icon.svg';

import './App.scss';

require('intersection-observer');

const App = () => {
	const [page, setPage] = useState('intro');
	const [modalVisibility, setModalVisibility] = useState(false);

	const handleModal = value => {
		setModalVisibility(value);
	};

	useLayoutEffect(() => {
		let elements = document.querySelectorAll('.page');

		let options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.3
		};

		elements.forEach(element => {
			const callback = entries => {
				entries.forEach(entry => {
					const classExists = name => entry.target.classList.contains(name);

					if (entry.isIntersecting) {
						if (classExists('intro')) {
							// Introduction page
							setPage('intro');
						} else if (classExists('work')) {
							// Work page
							setPage('work');
						}
					}
				});
			};

			let observer = new IntersectionObserver(callback, options);
			observer.observe(element);
		});
	}, []);

	return (
		<React.Fragment>
			<div className="app">
				<div className={`navbar ${page !== 'intro' && 'navbar--fixed'}`}>
					<div>
						<img src={logoIcon} alt="logo" className="navbar--logo" />
					</div>
					<div>
						<img
							className="navbar__menu-icon"
							src={menuIcon}
							alt="menu icon"
							onClick={() => handleModal(true)}
						/>
					</div>
				</div>

				{modalVisibility && <Modal handleModal={handleModal} />}
				<Intro />
				<Work />
				<OpenSource />
				<Talks />
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default App;
