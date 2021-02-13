import React from 'react';
import PropTypes from 'prop-types';
import ArtGrid from './art-grid';

const drawings = [
  {
    id: 1,
    thumb_img:
      'https://res.cloudinary.com/dzpntisxj/image/upload/c_scale,w_360/v1612106484/tandem-art/IMG_20210109_132451_553_ie0gx0.jpg',
    regular_img:
      'https://res.cloudinary.com/dzpntisxj/image/upload/c_scale,w_650/v1612106484/tandem-art/IMG_20210109_132451_553_ie0gx0.jpg',
    download_img:
      'https://res.cloudinary.com/dzpntisxj/image/upload/v1612106484/tandem-art/IMG_20210109_132451_553_ie0gx0.jpg',
    title: 'Help',
    description: 'Help cometh from God',
  },
  {
    id: 2,
    thumb_img:
      'https://res.cloudinary.com/dzpntisxj/image/upload/c_scale,w_360/v1612106538/tandem-art/PicsArt_01-14-08.07.19_brjfxe.png',
    regular_img:
      'https://res.cloudinary.com/dzpntisxj/image/upload/c_scale,w_650/v1612106538/tandem-art/PicsArt_01-14-08.07.19_brjfxe.png',
    download_img:
      'https://res.cloudinary.com/dzpntisxj/image/upload/v1612106538/tandem-art/PicsArt_01-14-08.07.19_brjfxe.png',
    title: 'Light',
    description: "God's light shines in the dark places",
  },
  {
    id: 3,
    thumb_img:
      'https://res.cloudinary.com/dzpntisxj/image/upload/c_scale,w_360/v1612106635/tandem-art/20210131_162253_ygqvcn.png',
    regular_img:
      'https://res.cloudinary.com/dzpntisxj/image/upload/c_scale,w_650/v1612106635/tandem-art/20210131_162253_ygqvcn.png',
    download_img:
      'https://res.cloudinary.com/dzpntisxj/image/upload/v1612106635/tandem-art/20210131_162253_ygqvcn.png',
    title: 'Direction',
    description: 'The Holy Spirit guides me',
  },
  {
    id: 4,
    thumb_img:
      'https://res.cloudinary.com/dzpntisxj/image/upload/c_scale,w_360/v1612106701/tandem-art/20210131_162424_ckoml0.png',
    regular_img:
      'https://res.cloudinary.com/dzpntisxj/image/upload/c_scale,w_650/v1612106701/tandem-art/20210131_162424_ckoml0.png',
    download_img:
      'https://res.cloudinary.com/dzpntisxj/image/upload/v1612106701/tandem-art/20210131_162424_ckoml0.png',
    title: 'The Valley',
    description: 'God is always with me',
  },
];

const ArtGallery = ({ images }) => <ArtGrid drawings={images} />;

ArtGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArtGallery;
