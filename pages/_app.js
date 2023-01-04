import "../styles/globals.css";
import { store } from "../config/store";
import { Provider } from "react-redux";
import React from "react";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}
