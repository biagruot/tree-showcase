import React, { FC, useState } from 'react';
import Image from 'next/image';

type Props = {
  name: string;
  species: string;
  image: string;
};

export const Card: FC<Props> = ({ name, species, image }) => {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage((prevState) => !prevState);
  };

  return (
    <li
      className="rounded-xl border border-gray-100 p-8 shadow-xl w-80 text-gray-500 cursor-pointer"
      tabIndex={0}
    >
      <h2 className="text-xl font-bold text-green-800">{name}</h2>
      <p className="mt-2 text-sm">{species}</p>

      <div
        className={`${showImage ? `block` : `hidden`} w-60 h-60 relative mb-6`}
      >
        <Image
          fill
          src={image}
          alt={`Picture of a ${name} tree`}
          className="rounded-lg mt-4"
          placeholder="blur"
          blurDataURL="/skeleton.svg"
        />
      </div>

      <button
        onClick={handleClick}
        className="mt-6 group relative w-24 overflow-hidden rounded-lg bg-white text-sm shadow border border-green-800"
      >
        <div className="absolute inset-0 w-0 bg-green-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span
          className="relative group-hover:text-white text-sm text-green-800"
          aria-label={showImage ? `Hide` : `Show` + `image of ${name} tree`}
        >
          {showImage ? `Hide` : `Show`} Image
        </span>
      </button>
    </li>
  );
};

export default Card;
