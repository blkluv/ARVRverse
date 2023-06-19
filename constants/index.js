import { useEffect } from 'react';

export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: '/planet-01.png',
    title: 'CREverse',
    url: 'https://www.spatial.io/s/CREVerse-64887a65780666d4c44d6330?share=8376079255650417080',
  },
  {
    id: 'world-2',
    imgUrl: '/planet-02.png',
    title: 'LUV Metaverse',
    url: 'https://www.spatial.io/s/LUV-METAVERSE-63a23b31d49a590001d7d2cd?share=2348673148563508728',
  },
  {
    id: 'world-3',
    imgUrl: '/planet-03.png',
    title: 'Estateverse',
    url: 'https://www.spatial.io/s/Estateverse-63b36891758e7f00016d4c42',
  },
  {
    id: 'world-4',
    imgUrl: '/planet-04.png',
    title: 'Hairverse',
    url: 'https://www.spatial.io/s/Hairverse-63a2cfa4d49a590001d7d5fb?share=1273140408900528653',
  },
  {
    id: 'world-5',
    imgUrl: '/planet-05.png',
    title: 'Musicverse',
    url: 'https://www.spatial.io/s/Musicverse-64887ac3780666d4c44d641c?share=9157641813157279518',
  },
];

const ExploreWorlds = () => {
  useEffect(() => {
    const renderClickableImages = async () => {
      const exploreWorldsContainer = document.getElementById('exploreWorldsContainer');

      if (!exploreWorldsContainer) return;

      const { default: imagesLoaded } = await import('imagesloaded');

      imagesLoaded(exploreWorldsContainer, () => {
        // Images have finished loading
        // Implement any logic you need here
      });
    };

    renderClickableImages();
  }, []);

  return (
    <div id="exploreWorldsContainer">
      {exploreWorlds.map((world) => (
        <a key={world.id} href={world.url} target="_blank">
          <img src={world.imgUrl} alt={world.title} />
        </a>
      ))}
    </div>
  );
};

export default ExploreWorlds;
