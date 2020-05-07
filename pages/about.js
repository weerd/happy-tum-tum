import Footer from '../components/Footer';
import Header from '../components/Header';

export default function About() {
  return (
    <>
      <div className='bg-pink-400 h-2 w-full fixed top-0 left-0 z-10'></div>

      <Header />

      <main>
        <div className='px-4 py-8'>
          <div className='max-w-screen-sm mx-auto'>
            <p>About</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
