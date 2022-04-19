import { AppShell, MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { AuthProvider } from '../lib/firebase.auth';
import '../styles/globals.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >

        <AuthProvider>

          <AppShell
            padding="md"
            header={<Header />}
            footer={<Footer />}
          >
            <Component {...pageProps} />
          </AppShell>
        </AuthProvider>

      </MantineProvider>
    </>
  );
}

export default MyApp
