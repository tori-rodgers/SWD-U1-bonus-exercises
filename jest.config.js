const config = {
	verbose: true,
	collectCoverage: true, // Enable coverage collection
	coverageDirectory: 'coverage', // Specify where to output coverage reports
	collectCoverageFrom: [
		'./unit-testing/*.js', // limit to specific directory
		'./classes-tdd-error-handling-review/**/*.js',
        '!**/main.js',
		// Lines to exclude directories below are not needed since previous line is so specific
		// '!**/node_modules/**',
		// '!**/coverage/**',
		// '!jest.config.js',
	],
	coverageReporters: ['json', 'lcov', 'text'], // Specify desired report formats
};

module.exports = config;
