import { UserProvider } from 'context/useContext'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/themes'

import { GlobalStyles } from '../styles/global'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Boilerplate</title>
          <link rel="shortcut icon" href="img/icon-512.png" />
          <link rel="apple-touch-icon" href="img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="description" content="simple content boilerplate" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  )
}
