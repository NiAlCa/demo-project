import React, { useEffect, useState } from "react";
import styles from "./DetailedModal.module.scss";
import { IDetailedModal } from "./DetailedModal.types";
import Image from "next/image";
import { truncate } from "./utils";
import ogBadge from "../../../../public/assets/images/detailed-modal/og-badge.png";
import { NFT_CONTRACT_ADDRESS_V2 } from "../../../../public/contracts/marketplace/constants";
const DetailedModal = ({ nft }: IDetailedModal) => {
  const [isOg, setIsOg] = useState<boolean>(false);
  const splitImage = nft.image.split("//");

  useEffect(() => {
    if (nft) {
      nft.attributes.forEach((attr) => {
        if (attr.trait_type === "og") {
          setIsOg(attr.value as boolean);
        }
      });
    }
  }, [nft]);

  const splitID = nft.name.split("#")[1];
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.image}>
          <a
            href={`https://rrcc.mypinata.cloud/ipfs/${splitImage[1]}`}
            target="_blank"
          >
            {isOg && (
              <Image
                src={ogBadge}
                alt=""
                width={48}
                height={41}
                className={styles.ogBadge}
              />
            )}
            <Image
              src={`https://rrcc.mypinata.cloud/ipfs/${splitImage[1]}`}
              alt=""
              style={{ objectFit: "cover" }}
              fill
              sizes="(max-width: 767px) 90vw, 25vw"
            />
          </a>
        </div>
        <div className={styles.name}>
          <h2>|| {nft.name}</h2>
          <div>
            <h6>Collection</h6>
            <h5>{nft.collection}</h5>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.traitCardTop}>
            <a
              href={`https://explorer.evm.shimmer.network/token/${NFT_CONTRACT_ADDRESS_V2}/instance/${splitID}`}
              target="_blank"
            >
              <h6>Asset ID</h6>
              <h4>{truncate(nft.assetId, 25)}</h4>
            </a>
          </div>
          <div className={styles.traitCardTop}>
            <h6>IPFS Link</h6>
            <a
              href={`https://rrcc.mypinata.cloud/ipfs/${splitImage[1]}`}
              target="_blank"
            >
              <h4>{truncate(nft.image, 25)}</h4>
            </a>
          </div>
        </div>
        <h6>Attributes</h6>
        <div className={styles.bottom}>
          {nft.attributes.map((attr) => (
            <div key={attr.trait_type} className={styles.traitCardBottom}>
              <h6>{attr.trait_type}</h6>
              <h4 className="traits-text">{`${attr.value}`}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedModal;
