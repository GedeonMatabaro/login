// pages/_app.js
import type { AppProps } from 'next/app';
import '@/app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  // You can add layout or global state management logic here
  return <Component {...pageProps} />; 
}
export default MyApp;
