import '../styles/globals.css'
import 'antd/dist/reset.css';
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>DSC Sudoku Solver Detection</title>
      <link rel="icon" href="/DSC_LOGO.png" />
      <meta name="author" content="DSC " />
      <meta
        name="description"
        content="This is an Open AI project to solve Sudoku" />
      <meta
        property="og:image"
        content="https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/238669704_355448142970814_766110589246028557_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WbeKv7qhRQ0AX9QRcIv&_nc_ht=scontent.fsgn15-1.fna&oh=00_AfDnYJVJ0rDJBzwsjksO0VcqBY6kufJOJ2cCBDzZ-92Tcg&oe=639BDFE6" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Component {...pageProps} />
  </>
}
