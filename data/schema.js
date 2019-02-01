const { gql } = require('apollo-server-express');

module.exports = gql`
	type Query {
		profile: Profile
	}

	type Profile {
		name: String
		age: Int
		about: String
		resume: String
		portfolio: String
		social: Social
		work: [Work]
	}

	type Social {
		github: String
		twitter: String
		linkedin: String
		freecodecamp: String
		codepen: String
		hackerrank: String
	}

	type Work {
		aboutCompany: String
		companyName: String
		image: String
		role: String
		roleDescription: String
		technologies: String
	}
`;
