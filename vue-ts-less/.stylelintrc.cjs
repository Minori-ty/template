module.exports = {
  extends: [
    'stylelint-config-standard-less',
    'stylelint-config-recommended-vue',
    'stylelint-order',
    'stylelint-config-recess-order',
    'stylelint-prettier',
  ],
  rules: {
    'max-nesting-depth': 2,
    'declaration-no-important': true,
  },
}
