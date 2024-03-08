module.exports = {
    '*.{vue,ts,js,cjs,scss,less,css,json,md}': 'prettier --write',
    '*.{ts,js,cjs}': 'eslint --fix',
    '*.{vue,scss,less,css}': 'stylelint --fix',
}
