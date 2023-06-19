// Updated exploreWorlds array with clickable imgUrls
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

// Generating HTML with clickable images
const exploreWorldsContainer = document.getElementById('exploreWorldsContainer');

exploreWorlds.forEach(world => {
  const { imgUrl, title, url } = world;
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.target = '_blank';

  const image = document.createElement('img');
  image.src = imgUrl;
  image.alt = title;

  anchor.appendChild(image);
  exploreWorldsContainer.appendChild(anchor);
});

// Rest of the code...

// Starting features array
export const startingFeatures = [
  'Find a world that suits you and you want to enter',
  'Enter the world with positive intentions thinking with your heart',
  'No need to beat around the bush, just stay on the gas and have fun',
];

// New features array
export const newFeatures = [
  {
    imgURL: '/vrpano.svg',
    title: 'Event Line Up',
    subtitle:
      'We will announce our partnerships with brands, creators, and innovators',
  },
  {
    imgURL: '/headset.svg',
    title: 'Live VR Events',
    subtitle:
      'We are bringing the metaverse to a local city near you with a series of VR events.',
  },
];

// Insights array
export const insights = [
  {
    imgUrl: '/planet-06.png',
    title: 'Join our Linked ARVRtise group',
    subtitle:
      'Tap into the latest and greatest ARVRtising news, memes and events in our ARVRtise group <a href="https://www.linkedin.com/groups/9068432/" target="_blank">here</a>.',
  },
  {
    imgUrl: '/planet-07.png',
    title: 'ARVRtise blog',
    subtitle:
      'Tap into the latest AI, AR, NFT, VR, XR news <a href="https://www.arvrtise.com/blog-standard/" target="_blank">here</a>.',
  },
  {
    imgUrl: '/planet-08.png',
    title: 'Customize Your Metaverse',
    subtitle:
      'Are you looking to onboard your brand to the metaverse in a customized environment? Contact us to make it a reality <a href="https://www.arvrtise.com/custom-arvrtise-metaverse/" target="_blank">here</a>.',
  },
];

// Socials array
export const socials = [
  {
    name: 'twitter',
    url: 'https://twitter.com/arvrtise',
  },
  {
    name: 'linkedin',
    url: 'https://linkedin.com/showcase/arvrtise',
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/arvrtise',
  },
  {
    name: 'facebook',
    url: 'https://facebook.com',
  },
];

