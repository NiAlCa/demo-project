declare module 'gifshot' {
    interface GifshotOptions {

      images: string[];
      gifWidth?: number;
      gifHeight?: number;

    }
  
    interface GifshotResult {
      error: boolean;
      image?: string;

    }
  
    export function createGIF(options: GifshotOptions, callback: (result: GifshotResult) => void): void;
  }
  