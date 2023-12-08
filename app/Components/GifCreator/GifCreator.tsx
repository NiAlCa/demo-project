import React, { useState } from 'react';
import gifshot from 'gifshot';
import { NFT } from '../../data/LastSongData.mock';

interface GenerateGifProps {
  selectedFavorites: NFT[];
}



  
  export const GifCreator: React.FC<GenerateGifProps> = ({ selectedFavorites }) => {
    const [gifPreview, setGifPreview] = useState<string | null>(null);
  
    const generateAndDownloadGif = () => {
      const images = selectedFavorites.map((nft) => nft.image);
  
      gifshot.createGIF({ images, gifWidth: 400, gifHeight: 300 }, (obj: gifshot.GifshotResult) => {
        if (!obj.error && obj.image) {
          setGifPreview(obj.image); 
        }
      });
    };
  
    const downloadGif = () => {
      if (gifPreview) {
        const a = document.createElement('a');
        a.href = gifPreview;
        a.download = 'favorites.gif';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    };
  
    return (
      <div>
        <button onClick={generateAndDownloadGif}>Generate GIF</button>
        {gifPreview && (
          <div>
            <img src={gifPreview} alt="GIF Preview" />
            <button onClick={downloadGif}>Download GIF</button>
          </div>
        )}
      </div>
    );
  };
  