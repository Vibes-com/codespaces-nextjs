import { SSRProvider } from '@react-aria/ssr';
import '../styles/globals.css'
import '../styles/responsive.css'
import Navbar from '../comps/home/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from '../comps/home/Footer';
import { useRouter } from 'next/router';
import '../styles/admin.css'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  if (router.pathname !== '/login' && !router.pathname.match('/admin')) {
    return (
      <SSRProvider>
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      </SSRProvider>
    );
  } else {
    // useEffect(() => {
    //   import ('bootstrap/dist/js/bootstrap.js')
    // }, []);
    return (
      <SSRProvider>
        <>
          <div className='bg-white'>
            <Component {...pageProps} />
          </div>
        </>
      </SSRProvider>
    );
  }
}

export default MyApp;
