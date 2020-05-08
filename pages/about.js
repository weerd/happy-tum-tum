import Header from '../components/Header';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout page='about'>
      <main>
        <article className='px-4 py-8'>
          <div className='max-w-screen-sm mx-auto'>
            <h1 className='font-bold mb-6 text-2xl text-cream-800'>About</h1>

            <p>
              <em>more to come...</em>
            </p>
          </div>
        </article>
      </main>
    </Layout>
  );
}
