module.exports = {
    './src/**/*.{js,jsx}': ['prettier --write', 'yarn eslint:fix:js'],
    './src/**/*.{ts,tsx}': ['prettier --write', 'npx eslint -c ./.eslintrc.js --fix'],
}
