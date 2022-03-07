import type { NextPage } from "next";
import Head from "next/head";
import { MainLayout } from "@/components/Layout";
import { NewReleasesList } from "@/features/new-releases";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Music Reviews, Ratings, Charts, News | Album of The Year</title>
        <meta
          name="description"
          content="Top music of the year. Featuring album reviews, ratings, charts, year end lists and more."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Album of The Year - Music Reviews, Ratings, Charts, News"
        />
      </Head>
      <MainLayout />
      <NewReleasesList />
    </div>
  );
};

export default Home;
