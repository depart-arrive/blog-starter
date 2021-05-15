import '../styles/index.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
      <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">

}
