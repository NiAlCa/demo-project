import React, { useState, useEffect } from 'react';
import styles from "./FavoriteSelect.module.scss";
import Image from 'next/image';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

type NFT = {
  name: string;
  description: string;
  image: string;
  assetId: string;
  collection: string;
  external_url: string;
};

interface FavoriteSelectProps {
  selectedFavorites: NFT[];
  setSelectedFavorites: React.Dispatch<React.SetStateAction<NFT[]>>;
  isSelectionLimited: boolean;
}

export const FavoriteSelect: React.FC<FavoriteSelectProps> = ({
  selectedFavorites,
  setSelectedFavorites,
  isSelectionLimited,
}) => {
  const [nfts, setNfts] = useState<NFT[]>([]);

  useEffect(() => {
    const loadNFTMetadata = async () => {
      const metadataFiles = Array.from({ length: 10 }, (_, i) => `/metadata/${i}`);
      try {
        const metadataPromises = metadataFiles.map(file => fetch(file));
        const metadataResponses = await Promise.all(metadataPromises);
        const metadata = await Promise.all(metadataResponses.map(res => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        }));
        setNfts(metadata.flat());
      } catch (error) {
        console.error("Failed to load NFT metadata", error);
      }
    };

    loadNFTMetadata();
  }, []);

  const toggleFavorite = (assetId: string) => {
    setSelectedFavorites(prevSelected => {
      const isFavorite = prevSelected.some(nft => nft.assetId === assetId);
      if (isFavorite) {
        // Remove if it's already a favorite
        return prevSelected.filter(nft => nft.assetId !== assetId);
      } else if (!isSelectionLimited || prevSelected.length < selectedFavorites.length) {
        // Add if it's not a favorite and selection isn't limited
        return [...prevSelected, ...nfts.filter(nft => nft.assetId === assetId)];
      }
      return prevSelected; // Return previous state if the selection is limited
    });
  };

  const ipfsToHttpUrl = (ipfsUrl: string) => {
    return ipfsUrl.replace(/^ipfs:\/\/(.+)/, 'https://ipfs.io/ipfs/$1');
  };

  return (
    <div className={styles.container}>
      {nfts.map((nft: NFT) => (
        <div key={nft.assetId} className={styles.card}>
          <div className={styles.imageContainer} onClick={() => toggleFavorite(nft.assetId)}>
            <Image
              src={ipfsToHttpUrl(nft.image)}
              alt={nft.name}
              width={250}
              height={250}
            />
            {selectedFavorites.some(selectedNft => selectedNft.assetId === nft.assetId) ? (
              <AiFillHeart
                className={styles.isFavorite}
                onClick={() => toggleFavorite(nft.assetId)}
              />
            ) : (
              <AiOutlineHeart
                className={styles.setFavorite}
                onClick={() => toggleFavorite(nft.assetId)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
