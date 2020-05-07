import Header from '../components/Header';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout page='about'>
      <main>
        <div className='px-4 py-8'>
          <div className='max-w-screen-sm mx-auto'>
            <p>About</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
