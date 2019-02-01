module.exports = {
	apps: [
		{
			name: 'node app',
			script: './server',
			instances: '1',
			env: {
				NODE_ENV: 'development'
			},
			env_production: {
				NODE_ENV: 'production'
			}
		}
	]
};
