import React from "react";
import useNewReleases from "../api/useNewReleases";

export const NewReleasesList = () => {
  const { data, error } = useNewReleases();

  if (error) return null;

  return (
    <div className=" mb-[10px] pt-[15px] px-[15px] tablet:p-5 mt-[15px] tablet:mt-0">
      <div className="flex justify-between items-center mb-4 pb-[2px] border-b-[1px] border-[#989898]">
        <h1 className="text-[#222] text-[1em]	font-bold">NEW RELEASES</h1>
        <div className="font-normal	leading-[18px] text-gray-500 text-[.8rem]">
          VIEW ALL
        </div>
      </div>

      <div>
        {data?.albums.items.map((album) => (
          <div key={album.id}>
            {/* use Image component */}
            <img
              src={album.images[0].url}
              alt={`${album.name}'s cover photo`}
            />
            <div>{album.name}</div>
            <div>{album.artists[0].name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
