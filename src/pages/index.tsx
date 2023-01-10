import { TreeType } from '@/types/tree';
import { API_URL } from '@/utils/constants';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

export interface HomePageProps {
  trees: Array<TreeType>;
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(API_URL);
    const trees = (await res.json()) as TreeType;

    return {
      props: {
        trees,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once a day
      // These data shouldn't change often so once a day should be a good deal
      revalidate: 86400,
    };
  } catch (error) {
    return { notFound: true };
  }
};

const HomePage: NextPage<HomePageProps> = ({ trees = [] }) => (
  <div className="py-0 px-8">
    <Head>
      <title>Trees showcase</title>
      <meta
        name="description"
        content="A web app that showcases some trees species with images"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex flex-col items-center justify-center flex-grow min-h-screen px-0 py-16">
      <h1>Trees showcase</h1>
      {/* GRID */}
      {/* CARDS */}
    </main>

    <footer className="border-solid border-t flex items-center justify-center flex-grow px-0 py-8">
      Made with
      <span className="m-2">
        <Image
          src="/heart.svg"
          alt="Red heart logo image"
          width={28}
          height={28}
        />
      </span>
      by Biagio Ruotolo
    </footer>
  </div>
);

export default HomePage;
