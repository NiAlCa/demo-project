import React, { useEffect, useState } from "react";
import styles from "./PriceTracker.module.scss";
import axios from "axios";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const PriceTracker = () => {
  const [rustPrice, setRustPrice] = useState<string>("");
  const [smrPrice, setSMRPrice] = useState<string>("");
  const [dailyPriceChange, setDailyPriceChange] = useState<string>("");
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const fetchData = async () => {
    await axios
      .get(
        `https://api.geckoterminal.com/api/v2/networks/shimmerevm/pools/0x9f43b71c94837f37700a5861d34c3bf8865cc728`
      )
      .then(async (response) => {
        setRustPrice(response.data.data.attributes.base_token_price_usd);
        setSMRPrice(response.data.data.attributes.quote_token_price_usd);
        setDailyPriceChange(
          response.data.data.attributes.price_change_percentage.h24
        );

        setIsFetching(false);
      })
      .catch((err) => console.error(err.message));
  };

  
  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {!isFetching && (
        <>
          <div className={styles.price}>
            <h4 className={styles.rust}>$RUST</h4>
            <h4>{`$${rustPrice.substring(0, 9)}`}</h4>
          </div>
          <h5 className={styles.shimmer}>
            SMR {`$${smrPrice.substring(0, 7)}`}
          </h5>

          <Pill dailyPriceChange={dailyPriceChange} />
        </>
      )}
    </div>
  );
};

const Pill = ({ dailyPriceChange }: { dailyPriceChange: string }) => {
  const positive = Number(dailyPriceChange) > 0;
  const classNames = cx({
    pill: true,
    positive: positive,
    negative: !positive,
  });
  return (
    <div className={classNames}>
      <h4>
        {`${positive ? "+" : ""}`}
        {dailyPriceChange}
        {`%`}
      </h4>
    </div>
  );
};

export default PriceTracker;
