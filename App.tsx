import * as React from 'react';
import Route from './src/Route.js'

import { StoreProvider } from './src/utils/Store.js'
export default class App extends React.Component {
  render() {
    return (
      <StoreProvider>
        <Route/>
      </StoreProvider>
    )
  }
}
