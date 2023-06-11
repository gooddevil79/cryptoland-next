import RootLayout from '@/components/root-layout/RootLayout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
