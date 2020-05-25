const fs = require('fs');

const randomId = Math.random().toString(23).slice(2);
const filePath = 'build/personal-service-worker.js';

fs.readFile(filePath, 'utf8', (error, data) => {
	if (error) throw error;

	const fileToWrite = data.replace('__VERSION__', randomId);

	fs.writeFile(filePath, fileToWrite, (error) => {
		if (error) throw error;

		console.log('Service worker version generated');
	});
});
