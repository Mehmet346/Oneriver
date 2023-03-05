import * as React from 'react';
import Route from './src/Route.tsx'

import { Provider } from 'react-redux';
import { store } from './src/utils/Store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Route/>
      </Provider>
    )
  }
}
