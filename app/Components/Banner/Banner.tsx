import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { NFT } from '../../data/LastSongData.mock';
import styles from './Banner.module.scss';

interface BannerProps {
  selectedFavorites: NFT[];
}

const Banner: React.FC<BannerProps> = ({ selectedFavorites }) => {
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    if (imagesLoaded === selectedFavorites.length) {
      // Si todas las imágenes están cargadas, se podría generar el canvas aquí si se desea
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

  const getGridTemplateColumns = () => {
    switch (selectedFavorites.length) {
      case 1:
        return 'repeat(1, 1fr)';
      case 2:
        return 'repeat(2, 1fr)';
      case 3:
        return 'repeat(3, 1fr)';
      case 4:
        return 'repeat(3, 2fr)'; 
      case 5:
        return 'repeat(3, 2fr)';
      case 6:
        return 'repeat(3, 2fr)'; 
      default:
        return 'repeat(6, 1fr)'; 
    }
  };

  return (
    <div className={styles.bannerContainer}>
      <div id="banner" className={styles.banner} style={{ 
        gridTemplateColumns: getGridTemplateColumns(), 
        display: 'grid',
        gridGap: '0px'
      }}>
        {selectedFavorites.map((nft) => (
          <div key={nft.assetId} className={styles.favoriteItem}>
            <img
              src={nft.image}
              alt={nft.name}
              className={styles.favoriteImage}
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
