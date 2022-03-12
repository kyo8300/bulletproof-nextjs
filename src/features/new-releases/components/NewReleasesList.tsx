import React from "react";
import Image from "next/image";
import useNewReleases from "../api/useNewReleases";

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
          <div
            key={album.id}
            className='
              mb-[30px] inline-block w-1/2 px-[2.5px] align-top
              tablet:mb-[15px] tablet:w-1/3 tablet:px-[3%] tablet:pt-[10px] tablet:pb-[15px] 
              desktop:mb-[15px] desktop:w-1/6 desktop:px-[1%] desktop:pt-[10px] desktop:pb-[15px]
            '
          >
            {/* use Image component */}
            <div className='relative'>
              <Image
                src={album.images[1].url}
                alt={`${album.name}'s cover photo`}
                width={300}
                height={300}
                objectFit='contain'
              />
            </div>
            <div className='mb-[2px] text-[12px] font-semibold text-[#333]'>
              {album.artists[0].name}
            </div>
            <div className='text-[12px] text-[#000]'>{album.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
