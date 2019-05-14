import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import AppRoot from './src/navigation';
import store from './src/store/createStore';

export default class App extends Component {
  componentWillMount = () => {
    StatusBar.setBackgroundColor('#000');
  };

  render() {
    return (
      <Provider store={store}>
        <AppRoot />
      </Provider>
    );
  }
}
