import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./MintNFTModal.module.scss";
import Button from "../../Button/Button";
import { fetchContract, handleBuyNFT } from "../../Navbar/utils";
import { useStore, useStoreActions, useStoreState } from "../../../../store";
import gif from "../../../../public/assets/images/mint-modal/rrcc-gif.gif";
import soldOut from "../../../../public/assets/images/mint-modal/sold-out.png";
import Image from "next/image";
import InputNumber from "../../Input/Number";
import PaymentDropdown from "../../PaymentDropdown/PaymentDropdown";
import { useRouter } from "next/router";

const MintNFTModal = ({ setImagesUrls }: IMintModal) => {
  const { setIsConfirmationModalOpen, setMintModalOpen } = useStoreActions(
    (actions) => actions.ui
  );

  const { setNftMinted } = useStoreActions((actions) => actions.user);
  const { nftMinted } = useStoreState((state) => state.user);

  const [errorMessage, setErrorMessage] = useState<string>("");

  const [saleState, setSaleState] = useState<ISaleState>({
    active: false,
    mintPrice: 0,
    saleEndID: 0,
    nextTokenIdToSell: 0,
    isFetching: true,
    shimmerData: {
      symbol: "",
      address: "",
      price: 0,
    },
    rustData: {
      symbol: "",
      address: "",
      price: 0,
    },
    totalNftSupply: 0,
    saleLeft: 0,
  });

  const [amountOfNFTS, setamountOfNFTS] = useState<number | undefined>(1);
  const [buttonText, setButtonText] = useState<string>("MINT NFT");
  const [selected, setSelected] = useState<IToken>(saleState.rustData);
  const [isMinting, setIsMinting] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage("");
    if (Number(e.target.value) === 0) {
      setamountOfNFTS(undefined);
    } else if (Number(e.target.value) < 11) {
      setamountOfNFTS(Math.abs(Number(e.target.value)));
    }
    if (Number(e.target.value) > 1 && Number(e.target.value) < 11) {
      setButtonText(`MINT ${e.target.value} NFTs`);
    } else if (Number(e.target.value) === 1) {
      setButtonText("MINT NFT");
    } else if (e.target.value === undefined || Number(e.target.value) === 0) {
      setButtonText("MINT NFT");
    }
  };

  const handleModals = () => {
    setMintModalOpen(false);
    setIsConfirmationModalOpen(true);
  };

  useEffect(() => {
    fetchContract(setSaleState, saleState, setSelected);
    setImagesUrls([]);
    nftMinted && setNftMinted(false);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.gifContainer}>
        {saleState.saleLeft !== 0 && (
          <Image
            src={gif}
            alt="gif"
            objectFit="cover"
            fill
            className={styles.gif}
          />
        )}
        {saleState.saleLeft === 0 && !saleState.isFetching && (
          <>
            <Image
              src={gif}
              alt="gif"
              objectFit="cover"
              fill
              className={styles.soldOutgif}
            />
            <Image
              src={soldOut}
              alt="gif"
              objectFit="cover"
              className={styles.soldOut}
            />
          </>
        )}
      </div>
      {saleState.isFetching && <h2>LOADING...</h2>}
      {!saleState.isFetching && saleState.saleLeft !== 0 && (
        <>
          <h2>RRCC Main Collection Mint</h2>
          {saleState.active && (
            <>
              <InputNumber
                label={"ENTER NUMBER OF NFTS TO MINT"}
                value={amountOfNFTS}
                id={"numberOfNFTS"}
                setValue={handleChange}
              />

              {saleState.shimmerData && saleState.rustData && (
                <PaymentDropdown
                  amountOfNFTS={amountOfNFTS}
                  shimmerData={saleState.shimmerData}
                  rustData={saleState.rustData}
                  selected={selected}
                  setSelected={setSelected}
                />
              )}

              <div className={styles.mintContainer}>
                <Button
                  type={"primary"}
                  size={"normal"}
                  text={buttonText}
                  disabled={isMinting}
                  onClick={() =>
                    handleBuyNFT(
                      handleModals,
                      setImagesUrls,
                      setErrorMessage,
                      amountOfNFTS,
                      saleState,
                      selected,
                      setIsMinting,
                      setNftMinted
                    )
                  }
                  errorMessage={errorMessage}
                />

                <h5 className={styles.nftRemaining}>
                  NFTs Remaining: {saleState.saleLeft} /{" "}
                  {saleState.totalNftSupply}
                </h5>
              </div>
            </>
          )}
          {!saleState.active && <h2>Sale will resume shortly</h2>}
        </>
      )}
      {!saleState.isFetching && saleState.saleLeft === 0 && (
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h3>The Rusty Robot Main Collection has</h3>
          <h2>SOLD OUT</h2>
          <Button
            type={"primary"}
            size={"normal"}
            text={"VIEW PROFILE"}
            onClick={() => router.push("/dashboard")}
            errorMessage={errorMessage}
          />
        </div>
      )}
    </div>
  );
};
interface IMintModal {
  imagesUrls: string[];
  setImagesUrls: (str: string[]) => void;
}
export interface ISaleState {
  active: boolean;
  mintPrice: number;
  saleEndID: number;
  nextTokenIdToSell: number;
  shimmerData: IToken;
  rustData: IToken;
  totalNftSupply: number;
  saleLeft: number;
  isFetching: boolean;
}

export interface IToken {
  symbol: string;
  address: string;
  price: number;
}
export default MintNFTModal;
