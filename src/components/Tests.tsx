import stone from '../styles/images/stone.png';
import flower from '../styles/images/flower.png';
import constellation from '../styles/images/constellation.png';
import movie from '../styles/images/movie.png';
import playlist from '../styles/images/playlist.png';
import celeb from '../styles/images/celeb.png';
import Image from 'next/image';

function Tests() {
  const images = [
    { src: stone.src, alt: 'Stone' },
    { src: flower.src, alt: 'Flower' },
    { src: constellation.src, alt: 'Constellation' },
    { src: movie.src, alt: 'Movie' },
    { src: playlist.src, alt: 'Playlist' },
    { src: celeb.src, alt: 'Celebrity' },
  ];

  return (
    <div className="sm:mt-16 sm:pt-15 p-12 mt-8 pt-14 pb-15 test">
      <div className="grid grid-cols-2 gap-12 ">
        {images.map((thumbnail) => (
          <Image
            key={thumbnail.src}
            src={thumbnail.src}
            width={200}
            height={200}
            alt={thumbnail.alt}
            className="cursor-pointer border rounded box-shadow responsiveImage "
          />
        ))}
      </div>
    </div>
  );
}

export default Tests;
