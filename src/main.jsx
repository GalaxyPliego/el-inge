import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@styles/global/globalStyles.css'

import { NextUIProvider } from "@nextui-org/react";

import { Provider } from 'react-redux'
import { store } from './app/store'
import Theme from './Theme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <NextUIProvider>
          <Theme/>
        </NextUIProvider>
      </Provider>
    </React.StrictMode>
)
