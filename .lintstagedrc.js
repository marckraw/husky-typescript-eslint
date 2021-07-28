module.exports = {
  "*.{js,jsx}": ["prettier --write", "yarn eslint:fix:js"],
  "*.{ts,tsx}": "yarn eslint:fix:js",
};
