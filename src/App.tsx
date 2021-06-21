import React from 'react';
import { Provider} from 'react-redux'
import {Router} from '@/Router'

import {todoStore} from './stores'

export function App() {
  return (
    <Provider store={todoStore}>
      <Router />
    </Provider>
  )
}


export default App;