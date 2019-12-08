module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
   rules: {
      'prettier/prettier' : 'error',
      'jsx-a11y/label-has-associated-control' : 'off',
      'react/jsx-filename-extension': [
          'warn',
          { extensions: ['.jsx', '.js'] }
      ],
      'import/prefer-default-export': 'off',
      'react/state-in-constructor': 'off',
      'react/static-property-placement': 'off',
      'no-underscore-dangle': 'off',
      'no-console': ["error", {allow: ["tron"]}]
  },

  settings: {
    "import/resolver": {
      "babel-plugin-root-import" : {
        rootPathSuffix : "src"
      }
    }
  }
};
