import * as React from 'react';
import Route from './src/router/Route'

import { persistor, store } from './src/utils/store/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Route/>
      </PersistGate>
    </Provider>
  );
}

export default App;