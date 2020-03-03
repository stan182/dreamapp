import React from 'react';
import { createAppContainer } from 'react-navigation';

import { Navigator } from './navigation/Navigator';
import { StyleSheet } from 'react-native';

const AppContainer = createAppContainer(Navigator);

const App: () => React$Node = () => {
  return <AppContainer />;
};

export default App;
