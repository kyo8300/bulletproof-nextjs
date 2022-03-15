import React from "react";
import { useNewReleases } from "../api/getNewReleases";
import NewReleasesItem from "./NewReleasesItem";

export const NewReleasesList = () => {
  const { data, error } = useNewReleases();

  if (error) return null;

  return (
    <div className='mb-[10px] mt-[15px] px-[15px] pt-[15px] tablet:mt-0 tablet:p-5'>
      <div className='mb-4 flex items-center justify-between border-b-[1px] border-[#989898] pb-[2px]'>
        <h1 className='text-[1em] font-bold	text-[#222]'>NEW RELEASES</h1>
        <div className='text-[.8rem]	font-normal leading-[18px] text-gray-500'>
          VIEW ALL
        </div>
      </div>

      <div>
        {data?.albums?.items.map((album) => (
          <NewReleasesItem key={album.id} {...album} />
        ))}
      </div>
    </div>
  );
};
