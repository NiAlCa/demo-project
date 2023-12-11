import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import styles from './Banner.module.scss';
import Image from 'next/image';

type NFT = {
  name: string;
  description: string;
  image: string;
  assetId: string;
  collection: string;
  external_url: string;
};

interface BannerProps {
  selectedFavorites: NFT[];
}

const Banner: React.FC<BannerProps> = ({ selectedFavorites }) => {
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    if (imagesLoaded === selectedFavorites.length) {
      // Todo: Añadir acciones adicionales si es necesario
    }
  }, [imagesLoaded, selectedFavorites.length]);

  const onImageLoad = () => {
    setImagesLoaded((current) => current + 1);
  };

  const generateBannerCanvas = async () => {
    const bannerElement = document.getElementById('banner');
    if (bannerElement) {
      const canvas = await html2canvas(bannerElement, { useCORS: true });
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'favorite-banner.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const downloadBanner = () => {
    if (imagesLoaded === selectedFavorites.length) {
      generateBannerCanvas();
    } else {
      console.error('Please wait until all images are loaded.');
    }
  };

  const getGridStyles = () => {
    if (selectedFavorites.length === 9) {
      return {
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gridTemplateAreas: `
          "two three one one four five"
          "six seven one one eight nine"
        `
      };
    }
    // Agregar lógica para otros tamaños si es necesario
    return { gridTemplateColumns: 'repeat(3, 1fr)' };
  };

  const getItemStyle = (index) => {
    if (selectedFavorites.length === 9) {
      const gridAreaNames = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
      return { gridArea: gridAreaNames[index] };
    }
    return {};
  };

  const ipfsToHttpUrl = (ipfsUrl: string) => {
    return ipfsUrl.replace(/^ipfs:\/\/(.+)/, 'https://ipfs.io/ipfs/$1');
  };

  return (
    <div className={styles.bannerContainer}>
      <div id="banner" className={styles.banner} style={getGridStyles()}>
        {selectedFavorites.map((nft, index) => (
          <div key={nft.assetId} className={styles.favoriteItem} style={getItemStyle(index)}>
            <Image
              src={ipfsToHttpUrl(nft.image)} 
              alt={nft.name}
              className={styles.favoriteImage}
              width={500} 
              height={500} 
              onLoad={onImageLoad}
              crossOrigin="anonymous"
            />
          </div>
        ))}
      </div>
      <button onClick={downloadBanner} className={styles.downloadButton}>
        Download Banner as PNG
      </button>
    </div>
  );
};

export default Banner;
