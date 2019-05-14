// @flow
import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Splash from '../screens/Splash';
import Introduction from '../screens/Introduction';
import Bio from '../screens/Bio';
import Home from '../screens/Home';
import UpdateBio from '../screens/UpdateBio';
import Header from '../screens/Bio/components/Header';

const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    Bio: {
      screen: Bio,
      navigationOptions: {
        header: props => <Header {...props} />,
      },
    },
    UpdateBio: {
      screen: UpdateBio,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default createSwitchNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: 'none',
      },
    },
    Introduction: {
      screen: Introduction,
      navigationOptions: {
        headerMode: 'none',
      },
    },
    App: AppStack,
  },
  {
    initialRouteName: 'Splash',
  }
);
