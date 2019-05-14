import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppRoot from './src/navigation';
import store from './src/store/createStore';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoot />
      </Provider>
    );
  }
}
