import React, { useState, useEffect } from 'react';
import styles from "./FavoriteSelect.module.scss";
import Image from 'next/image';

// Definición del tipo NFT con sus propiedades.
type NFT = {
  name: string;
  description: string;
  image: string;
  assetId: string;
  collection: string;
  external_url: string;
};

// Props del componente FavoriteSelect, incluyendo los favoritos seleccionados y una función para actualizarlos.
interface FavoriteSelectProps {
  selectedFavorites: NFT[];
  setSelectedFavorites: React.Dispatch<React.SetStateAction<NFT[]>>;
}

// Componente funcional FavoriteSelect.
export const FavoriteSelect: React.FC<FavoriteSelectProps> = ({
  selectedFavorites,
  setSelectedFavorites,
}) => {
  // Estado para almacenar la lista de NFTs.
  const [nfts, setNfts] = useState<NFT[]>([]);

  // useEffect para cargar los metadatos de NFT al montar el componente.
  useEffect(() => {
    const loadNFTMetadata = async () => {
      // Creación de una lista de URLs para los metadatos.
      const metadataFiles = Array.from({ length: 10 }, (_, i) => `/metadata/${i}`);
      try {
        // Solicitudes fetch para cada archivo de metadatos.
        const metadataPromises = metadataFiles.map(file => fetch(file));
        const metadataResponses = await Promise.all(metadataPromises);
        // Procesamiento de las respuestas y conversión a JSON.
        const metadata = await Promise.all(metadataResponses.map(res => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        }));
        // Actualización del estado con los metadatos obtenidos.
        setNfts(metadata.flat());
      } catch (error) {
        console.error("Failed to load NFT metadata", error);
      }
    };

    loadNFTMetadata();
  }, []);


  // Función para alternar un NFT como favorito.
  const toggleFavorite = (assetId: string) => {
    setSelectedFavorites(prevSelected => {
      // Verificación si el NFT ya es un favorito.
      const isFavorite = prevSelected.some(nft => nft.assetId === assetId);
      return isFavorite
        ? prevSelected.filter(nft => nft.assetId !== assetId) // Si es favorito, se elimina de la lista.
        : [...prevSelected, ...nfts.filter(nft => nft.assetId === assetId)]; // Si no, se añade a la lista.
    });
  };

  // Función para convertir la URL de IPFS a una URL HTTP del gateway de IPFS.
  const ipfsToHttpUrl = (ipfsUrl: string) => {
    return ipfsUrl.replace(/^ipfs:\/\/(.+)/, 'https://ipfs.io/ipfs/$1');
  };

  // Renderización del componente.
  return (
    <div className={styles.container}>
      {/* Mapeo de cada NFT para mostrar en la interfaz */}
      {nfts.map((nft: NFT) => (
        <div key={nft.assetId} className={styles.card}>
          {/* Imagen del NFT con enlace convertido de IPFS a HTTP */}
          <Image
              src={ipfsToHttpUrl(nft.image)} 
              alt={nft.name}
              width={500} 
              height={300} 
              layout='responsive' 
            />
          {/* Botón para alternar el estado de favorito del NFT */}
          <button
            onClick={() => toggleFavorite(nft.assetId)}
            className={styles.button}
          >
            {/* Texto del botón cambia dependiendo si el NFT está en favoritos */}
            {selectedFavorites.some(selectedNft => selectedNft.assetId === nft.assetId)
              ? 'Remove from Favorites'
              : 'Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
};
