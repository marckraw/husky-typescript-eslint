module.exports = {
    '*.{js,jsx}': ['prettier --write', 'yarn eslint:fix:js'],
    '*.{ts,tsx}': ['prettier --write', 'yarn eslint:fix:ts'],
}
