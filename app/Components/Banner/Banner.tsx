// Importación de módulos y componentes necesarios.
import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import style from './Banner.module.scss';
import Image from 'next/image';
import { FavoriteSelect } from '../FavoriteSelect/FavoriteSelect';

// Definición del tipo NFT para representar cada activo digital.
type NFT = {
  name: string;
  description: string;
  image: string;
  assetId: string;
  collection: string;
  external_url: string;
};

// Props para el componente Banner, incluyendo los favoritos seleccionados y la función para actualizarlos.
interface BannerProps {
  selectedFavorites: NFT[];
  setSelectedFavorites: React.Dispatch<React.SetStateAction<NFT[]>>;
}

// Componente funcional Banner que recibe propiedades de tipo BannerProps.
const Banner: React.FC<BannerProps> = ({ selectedFavorites, setSelectedFavorites }) => {
  // Estados para controlar las imágenes cargadas y el caso seleccionado.
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [selectedCase, setSelectedCase] = useState(0);

  // Efecto para realizar acciones una vez que todas las imágenes están cargadas.
  useEffect(() => {
    if (imagesLoaded === selectedFavorites.length) {
      // Acciones una vez que todas las imágenes están cargadas.
    }
  }, [imagesLoaded, selectedFavorites.length]);

  // Función para convertir números a palabras.
  const numberToWord = (num: number) => {
    const words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
    return words[num] || "null";
  };

  // Función para actualizar el contador de imágenes cargadas.
  const onImageLoad = () => {
    setImagesLoaded((current) => current + 1);
  };

  // Función para generar el canvas del banner.
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

  // Función para descargar el banner como PNG.
  const downloadBanner = () => {
    if (imagesLoaded === selectedFavorites.length) {
      generateBannerCanvas();
    } else {
      console.error('Please wait until all images are loaded.');
    }
  };

  // Función para convertir URLs de IPFS a HTTP.
  const ipfsToHttpUrl = (ipfsUrl: string) => {
    return ipfsUrl.replace(/^ipfs:\/\/(.+)/, 'https://ipfs.io/ipfs/$1');
  };

  // Función para obtener estilos de la cuadrícula basados en el caso seleccionado.
  const getGridStyles = () => {
    let styles: React.CSSProperties = {
      display: 'grid',
      gridGap: '0px',
    };

    // Estilos diferentes dependiendo del caso seleccionado.
    switch (selectedCase) {
      case 1:
        styles.gridTemplateColumns = '1fr';
        break;
      case 3:
        styles.gridTemplateColumns = 'repeat(3, 1fr)';
        styles.gridTemplateAreas = `"one two  three"`;
        break;
      case 12:
        styles.gridTemplateColumns = 'repeat(6, 1fr)';
        styles.gridTemplateRows = 'repeat(2, 1fr)';
        styles.gridTemplateAreas = `"one two  three four five six" " seven eight nine ten eleven twelve"`;
        break;
      case 9:
        styles.gridTemplateColumns = 'repeat(6, 1fr)';
        styles.gridTemplateRows = 'repeat(2, 1fr)';
        styles.gridTemplateAreas = `"two three one one four five" "six seven one one eight nine"`;
        break;
    }

    return styles;
  };

  // Función para manejar la selección de casos y reiniciar los favoritos seleccionados.
  const handleCaseSelection = (caseNum: number) => {
    setSelectedCase(caseNum);
    setSelectedFavorites([]); // Reiniciar los favoritos seleccionados cuando cambia el caso.
  };

  // Verificar si la selección está limitada basada en la cantidad de favoritos y el caso.
  const isSelectionLimited = selectedFavorites.length >= selectedCase;

  // Renderizado del componente con JSX.
  return (
    <div className={style.bannerContainer}>
      <div className={style.caseSelection}>
        {[1, 3, 12, 9].map((caseNum) => (
          <button key={caseNum} onClick={() => handleCaseSelection(caseNum)}>
            Caso {caseNum}
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
          Descargar Banner como PNG
        </button>
      )}
    </div>
  );
};

// Exportar el componente Banner por defecto.
export default Banner;
