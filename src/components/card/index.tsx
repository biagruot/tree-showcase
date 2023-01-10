import React, { FC, useState } from 'react';
import Image from 'next/image';

type Props = {
  name: string;
  species: string;
  image: string;
};

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === `undefined`
    ? Buffer.from(str).toString(`base64`)
    : window.btoa(str);

export const Card: FC<Props> = ({ name, species, image }) => {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage((prevState) => !prevState);
  };

  return (
    <li
      data-testid="tree-card"
      className="rounded-xl border border-gray-100 p-8 shadow-xl w-80 text-gray-500 cursor-pointer"
      tabIndex={0}
    >
      <h2 className="text-xl font-bold text-green-800">{name}</h2>
      <p className="mt-2 text-sm">{species}</p>

      <div
        data-testid="tree-image"
        hidden={!showImage}
        className="w-60 h-60 relative mb-6"
      >
        <Image
          fill
          src={image}
          alt={`Picture of a ${name} tree`}
          className="rounded-lg mt-4"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(240, 240),
          )}`}
        />
      </div>

      <button
        data-testid="show-image-button"
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
