export interface INFT {
  name: string;
  description: string;
  image: string;
  assetId: string;
  collection: string;
  attributes: IAttributes[];
  external_url: string;
  rarity: {
    score: number;
    rank: number;
  };
  onClick: () => void;
}

export interface IAttributes {
  trait_type: string;
  value: string | number | boolean;
}
