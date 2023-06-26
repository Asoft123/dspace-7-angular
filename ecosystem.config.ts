module.exports = {
	apps: [
		{
			name: 'uat',
			script: 'yarn start',
			instances: 2,
			autorestart: true,
			exec_mode: 'cluster',
			watch: false,
			max_memory_restart: '1G',
			env_production: {
				NODE_ENV: 'production'
			}
		}
		// Add other processes
	],

	deploy: {
		production: {
			user: 'SSH_USERNAME',
			host: 'SSH_HOSTMACHINE',
			ref: 'origin/main',
			repo: 'GIT_REPOSITORY',
			path: 'DESTINATION_PATH',
			'pre-deploy-local': '',
			'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
			'pre-setup': ''
		}
	}
};
