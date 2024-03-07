module.exports = {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-recommended-vue/scss',
        'stylelint-order',
        'stylelint-config-recess-order',
        'stylelint-prettier',
    ],
    rules: {
        'max-nesting-depth': 2,
    },
}
