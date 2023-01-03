import '../styles/globals.css'
import { store, wrapper } from '../config/store'
import { ReactReduxContext, Provider } from 'react-redux'
import React from 'react'

export default function App({ Component, pageProps }) {
  const context = React.createContext()
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider> 
  )
}
