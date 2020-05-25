import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App';
require('isomorphic-fetch');

ReactDOM.render(<App />, document.getElementById('root'));

if (process.env.NODE_ENV !== 'development' && 'serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/personal-service-worker.js')
			.then((registration) => {
				console.log(
					'ServiceWorker registration successful with scope: ',
					registration.scope
				);
			})
			.catch((err) => {
				console.log('ServiceWorker registration failed: ', err);
			});

		navigator.serviceWorker.addEventListener('controllerchange', () => {
			console.log('Updates available.');
		});
	});
}
