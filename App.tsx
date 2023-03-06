import * as React from 'react';
import Route from './src/router/Route'
import { Provider } from 'react-redux';
import { store } from './src/utils/store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <Route/>
    </Provider>
  );
}

export default App;