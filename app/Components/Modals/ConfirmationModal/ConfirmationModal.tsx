import React from "react";
import styles from "./ConfirmationModal.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../../Button/Button";
import { useStoreActions } from "../../../../store";
const ConfirmationModal = ({ imagesUrls }: IConfirmationModal) => {
  const router = useRouter();

  const { setIsConfirmationModalOpen, setMintModalOpen } = useStoreActions(
    (actions) => actions.ui
  );

  const { setNftMinted } = useStoreActions((actions) => actions.user);
  const handleModals = () => {
    setIsConfirmationModalOpen(false);
    setMintModalOpen(true);
  };

  const handleViewProfile = () => {
    setIsConfirmationModalOpen(false);
    router.push("/dashboard");
  };

  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        {imagesUrls &&
          imagesUrls.map((img, index) => (
            <Image
              key={index}
              src={`https://rrcc.mypinata.cloud/ipfs/${img}`}
              className={styles.image}
              width={300}
              height={300}
              alt={img}
            />
          ))}
      </div>
      <h3>
        Welcome to the <br></br>Rusty Robot Country Club!
      </h3>
      <p>
        Your RRCC NFT has been minted successfully.<br></br>You can view your
        Rusty Robot in your profile.
      </p>
      <div className={styles.buttons}>
        <Button
          type="secondary"
          size={"normal"}
          text={"VIEW PROFILE"}
          onClick={() => router.push("/dashboard")}
        />
        <Button
          size={"normal"}
          type="primary"
          text={"MINT AGAIN"}
          onClick={handleModals}
        />
      </div>
    </div>
  );
};

interface IConfirmationModal {
  imagesUrls: string[];
  handleModalsClose: () => void;
}
export default ConfirmationModal;
