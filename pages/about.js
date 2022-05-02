import Head from 'next/head';

import Layout from '../components/Layout/Layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | Happy Tum Tum </title>
      </Head>

      <h1>About</h1>

      <p>
        Happy Tum Tum is a small app to help quickly look up different foods and
        see if they are considered high FODMAP foods.
      </p>
    </Layout>
  );
}
