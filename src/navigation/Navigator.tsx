import { createStackNavigator } from 'react-navigation-stack';

import { ROUTES } from './routes';

import Home from '../screens/Home';

export const Navigator: any = createStackNavigator(
  {
    [ROUTES.HOME]: {
      screen: Home,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: ROUTES.HOME,
    navigationOptions: {
      headerVisible: false,
    },
  },
);
