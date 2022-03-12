import type { NextPage, GetStaticProps } from "next";
import { SWRConfig } from "swr";
import Head from "next/head";
import { MainLayout } from "@/components/Layout";
import { NewReleasesList, getNewReleases } from "@/features/new-releases";
import { ENDPOINT_NEW_RELEASES } from "@/config";

type Props = {
  fallback: {
    [ENDPOINT_NEW_RELEASES]: SpotifyApi.ListOfNewReleasesResponse;
  };
};

const Home: NextPage<Props> = ({ fallback }) => {
  return (
    <div>
      <Head>
        <title>Music Reviews, Ratings, Charts, News | Album of The Year</title>
        <meta
          name='description'
          content='Top music of the year. Featuring album reviews, ratings, charts, year end lists and more.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Album of The Year - Music Reviews, Ratings, Charts, News'
        />
      </Head>
      <SWRConfig value={{ fallback }}>
        <MainLayout />
        <NewReleasesList />
      </SWRConfig>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getNewReleases();

  return {
    props: {
      fallback: {
        [ENDPOINT_NEW_RELEASES]: data,
      },
    },
  };
};
