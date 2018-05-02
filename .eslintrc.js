module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['babel'],
  globals: {
    require: true,
    window: true,
    document: true,
    alert: true,
    UIkit: true,
  },
  rules: {
    'no-restricted-globals': 0,
    'no-undef': 0,
    'no-console': 1,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-danger': 1,
    'react/jsx-indent-props': [2, 2],
    'global-require': 1,
    'import/prefer-default-export': 0,
    'class-methods-use-this': 1,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-script-url': 0,
    'react/no-array-index-key': 0,
    'react/prefer-stateless-function': 0,
    camelcase: 0,
    'react/no-multi-comp': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'function-paren-newline': 0,
    'arrow-parens': 0,
    'react/no-unescaped-entities': 1,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
