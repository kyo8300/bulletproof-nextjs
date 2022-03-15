import React from "react";
import Image from "next/image";

const NewReleasesItem: React.FC<SpotifyApi.AlbumObjectSimplified> = ({
  images,
  name,
  artists,
}) => {
  return (
    <div
      className='
      mb-[30px] inline-block w-1/2 px-[2.5px] align-top
      tablet:mb-[15px] tablet:w-1/3 tablet:px-[3%] tablet:pt-[10px] tablet:pb-[15px] 
      desktop:mb-[15px] desktop:w-1/6 desktop:px-[1%] desktop:pt-[10px] desktop:pb-[15px]
    '
    >
      <div className='relative'>
        <Image
          src={images[1].url}
          alt={`${name}'s cover photo`}
          width={300}
          height={300}
          objectFit='contain'
        />
      </div>
      <div className='mb-[2px] text-[12px] font-semibold text-[#333]'>
        {artists[0].name}
      </div>
      <div className='text-[12px] text-[#000]'>{name}</div>
    </div>
  );
};

export default NewReleasesItem;
