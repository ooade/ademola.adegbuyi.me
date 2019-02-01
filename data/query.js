const name = 'Ademola Adegbuyi';
const age = 22;
const portfolio = 'https://ademola.adegbuyi.me';
let social = {};

const work = require('../src/Work/jobs.json');
require('../src/Footer/Social.json').forEach(item => {
	social[
		item.text
			.toLowerCase()
			.split(' ')
			.join('')
	] = item.href;
});

module.exports = {
	Query: {
		profile: () => {
			return {
				name,
				age,
				work,
				portfolio,
				social
			};
		}
	}
};
