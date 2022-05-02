import Head from 'next/head';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Layout({ children }) {
  return (
    <div className="">
      <Head>
        <meta name="description" content="Search food items and see if they are considered low or high FODMAP foods." />
      </Head>

      <div className="bg-pink-400 h-2 fixed top-0 left-0 z-10 w-full" />

      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
