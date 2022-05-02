import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout/Layout';
import FoodSearchFilter from '../components/FoodSearchFilter/FoodSearchFilter';

import foodData from '../resources/data/foods';

export default function Home({ foodData }) {
  return (
    <>
      <Layout>
        <Head>
          <title>FODMAP Food Reference | Happy Tum Tum </title>
        </Head>

        <div className="bg-gray-600">
          <p className="max-w-screen-sm mx-auto text-gray-300">
            Search for food items below and find out whether they are considered low or high{' '}
            <Link href="/about">
              <a className="underline">FODMAP foods</a>
            </Link>{' '}
            that could impact your digestion.
          </p>
        </div>

        <FoodSearchFilter data={foodData} />

        <p>results go here...</p>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // Export foods list in alphabetical order.
  // @TODO: Potentially use getInitialProps that runs for App on the server first?
  console.log(foodData);

  return {
    props: {
      foodData,
    },
  };
}
