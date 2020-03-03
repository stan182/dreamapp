module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
    'import/external-module-folders': ['node_modules'],
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
  },
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    'jest/no-disabled-tests': 0,
    'prefer-const': 'error',
    'no-console': 'error',
    quotes: [2, 'single', 'avoid-escape'],
    eqeqeq: 'error',
    'jest/no-identical-title': 'error',
    'no-shadow': 'error',
    'react-native/no-inline-styles': 0,
    'no-array-constructor': 'error',
    'import/order': 'error',
    'import/newline-after-import': 'error',
    'import/no-unresolved': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-duplicates': 'error',
    'react/jsx-no-bind': 'error',
    'react/jsx-pascal-case': 'error',
    'vars-on-top': 'error',
    'custom-rules/redux-complexity': ['error', { max: 7 }],
    'custom-rules/require-attributes': [
      'error',
      {
        required: ['testID', 'textId', 'titleId'],
        tags: ['TouchableOpacity', 'TextInput'],
        props: ['onPress'],
      },
    ],
  },
  plugins: ['import', 'custom-rules'],
};
