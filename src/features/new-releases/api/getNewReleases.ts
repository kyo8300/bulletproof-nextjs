import useSWR, { SWRResponse } from "swr";
import { getAccessToken } from "@/lib/auth";
import { ENDPOINT_NEW_RELEASES } from "@/config";

const fetcher = async (
  url: string
): Promise<SpotifyApi.ListOfNewReleasesResponse> => {
  const accessToken = await getAccessToken();

  return fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  }).then((r) => r.json());
};

export async function getNewReleases() {
  return await fetcher(ENDPOINT_NEW_RELEASES);
}

export function useNewReleases(): SWRResponse<
  SpotifyApi.ListOfNewReleasesResponse,
  Error
> {
  return useSWR(ENDPOINT_NEW_RELEASES, fetcher);
}
