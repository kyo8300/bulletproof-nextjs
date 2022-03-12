import useSWR from "swr";
import { getAccessToken } from "@/lib/auth";

function useNewReleases() {
  const fetcher = async (url: string) => {
    const accessToken = await getAccessToken();

    return fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }).then((r) => r.json());
  };

  const { data, error } = useSWR<SpotifyApi.ListOfNewReleasesResponse, Error>(
    "https://api.spotify.com/v1/browse/new-releases?limit=12",
    fetcher
  );

  return {
    data,
    error,
  };
}

export default useNewReleases;
