import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import style from './Banner.module.scss';
import Image from 'next/image';
import { FavoriteSelect } from '../FavoriteSelect/FavoriteSelect';

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
  setSelectedFavorites: React.Dispatch<React.SetStateAction<NFT[]>>;
}

const Banner: React.FC<BannerProps> = ({ selectedFavorites, setSelectedFavorites }) => {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [selectedCase, setSelectedCase] = useState(0);

  useEffect(() => {
    if (imagesLoaded === selectedFavorites.length) {
      // Actions once all images are loaded.
    }
  }, [imagesLoaded, selectedFavorites.length]);

  const numberToWord = (num: number) => {
    const words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
    return words[num] || "null";
  };

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

    switch (selectedCase) {
      case 1:
        styles.gridTemplateColumns = '1fr';
        break;
      case 3:
        styles.gridTemplateColumns = 'repeat(3, 1fr)';
        styles.gridTemplateAreas = `
          "one two  three "
        `;
        break;
      case 12:
        styles.gridTemplateColumns = 'repeat(6, 1fr)';
        styles.gridTemplateRows = 'repeat(2, 1fr)';
        styles.gridTemplateAreas = `
        "one two  three four five six"
        " seven eight nine ten eleven twelve "
     
      `;
        
        break;
      case 9:
        styles.gridTemplateColumns = 'repeat(6, 1fr)';
        styles.gridTemplateRows = 'repeat(2, 1fr)';
        styles.gridTemplateAreas = `
        "two three one one four five"
        "six seven one one eight nine"
        `;
        break;
    }

    return styles;
  };

  const handleCaseSelection = (caseNum: number) => {
    setSelectedCase(caseNum);
    setSelectedFavorites([]); // Reset selected favorites when case changes
  };

  const isSelectionLimited = selectedFavorites.length >= selectedCase;

  return (
    <div className={style.bannerContainer}>
      <div className={style.caseSelection}>
        {[1, 3, 12, 9].map((caseNum) => (
          <button key={caseNum} onClick={() => handleCaseSelection(caseNum)}>
            Case {caseNum}
          </button>
        ))}
      </div>

      {selectedCase > 0 && (
        <FavoriteSelect
          selectedFavorites={selectedFavorites}
          setSelectedFavorites={setSelectedFavorites}
          isSelectionLimited={isSelectionLimited}
        />
      )}

      <div id="banner" className={style.banner} style={getGridStyles()}>
        {selectedFavorites.map((nft, index) => (
          <div key={nft.assetId} className={style.favoriteItem} style={{ gridArea: numberToWord(index) }}>
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
      {imagesLoaded === selectedFavorites.length && (
        <button onClick={downloadBanner} className={style.downloadButton}>
          Download Banner as PNG
        </button>
      )}
    </div>
  );
};

export default Banner;
