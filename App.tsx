import * as React from 'react';
import Route from './src/router/Route.js'
import { Provider } from 'react-redux';
import { store } from './src/utils/store/Store.js';

const App = () => {
  return (
    <Provider store={store}>
      <Route/>
    </Provider>
  );
}

export default App;