import Card from '@/components/card';
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
    const result = await res.json();
    const trees = result.trees as TreeType;

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

    <main className="min-h-screen px-0 py-16">
      <h1 className="text-2xl font-semibold text-green-800 text-center mb-6">
        Trees showcase
      </h1>

      <section aria-label="List of trees">
        <ul className="flex flex-row flex-wrap items-center justify-center flex-grow gap-4">
          {trees.length > 0 &&
            trees.map((tree) => (
              <Card
                key={tree.name}
                name={tree.name}
                species={tree.species_name}
                image={tree.image}
              />
            ))}
        </ul>
      </section>
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
