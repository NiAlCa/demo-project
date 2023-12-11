import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import style from './Banner.module.scss';
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
      // Aquí puedes realizar alguna acción una vez que todas las imágenes se hayan cargado.
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

  const ipfsToHttpUrl = (ipfsUrl: string) => {
    return ipfsUrl.replace(/^ipfs:\/\/(.+)/, 'https://ipfs.io/ipfs/$1');
  };

  const getGridStyles = () => {
    let styles: React.CSSProperties = {
      display: 'grid',
      gridGap: '0px',
    };

    switch (selectedFavorites.length) {
      case 1:
        styles.gridTemplateColumns = 'repeat(1, 1fr)';
        break;
      case 2:
        styles.gridTemplateColumns = 'repeat(2, 1fr)';
        break;
      case 3:
        styles.gridTemplateColumns = 'repeat(3, 1fr)';
        break;
      case 4:
      case 5:
      case 6:
        styles.gridTemplateColumns = 'repeat(3, 2fr)';
        break;
      case 7:
      case 8:
        styles.gridTemplateColumns = 'repeat(6, 1fr)';
        break;
      case 9:
        styles.gridTemplateColumns = 'repeat(6, 1fr)';
        styles.gridTemplateRows = 'repeat(2, 1fr)';
        styles.gridTemplateAreas = `
          "two three one one four five"
          "six seven one one eight nine"
        `;
        break;
      default:
        styles.gridTemplateColumns = 'repeat(6, 1fr)';
    }

    return styles;
  };

  return (
    <div className={style.bannerContainer}>
      <div id="banner" className={style.banner} style={getGridStyles()}>
        {selectedFavorites.map((nft) => (
          <div key={nft.assetId} className={style.favoriteItem}>
            <Image
              src={ipfsToHttpUrl(nft.image)}
              alt={nft.name}
              className={style.favoriteImage}
              width={500}
              height={500}
              onLoad={onImageLoad}
              crossOrigin="anonymous"
            />
          </div>
        ))}
      </div>
      <button onClick={downloadBanner} className={style.downloadButton}>
        Download Banner as PNG
      </button>
    </div>
  );
};

export default Banner;
