const path = require('path');
const favicon = require('serve-favicon');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./data/schema');
const resolvers = require('./data/resolvers');

const app = express();

const PORT = process.env.PORT || 8080;

// compress all requests
app.use(compression());

// parse application/json
app.use(bodyParser.json());

// serve favicon
app.use(favicon(path.join(__dirname, '/public', 'favicon.ico')));

const defaultQuery = `
	query AdemolaProfile {
		profile {
			name
			portfolio
			social {
				github
				freecodecamp
			}
		}
}
`;

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	playground: {
		tabs: [
			{
				endpoint: null,
				query: defaultQuery
			}
		]
	}
});

server.applyMiddleware({ app });

app.use('/', express.static(path.join(__dirname, 'build')));

app.use('*', (_, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

process.on('unhandledRejection', (reason, p) =>
	console.log('Unhandled Rejection at: Promise ', p, reason)
);

app.listen(PORT, err => {
	if (err) throw err;

	console.log(`> App running on port ${PORT}`);
});
