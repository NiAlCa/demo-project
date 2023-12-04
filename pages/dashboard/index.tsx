import React from "react";
import { useFetchUserData } from "../../utils/dashboard/useFetchUserData";
import Footer from "../../app/Components/Footer/Footer";
import styles from "../../styles/pages/dashboard.module.scss";
import Avatar from "../../app/Components/Avatar/Avatar";
import { useStoreRehydrated } from "easy-peasy";
import UserInfo from "../../app/Components/UserInfo/UserInfo";
import { useStoreState } from "../../store";
import { useBackgroundColor } from "../../utils/dashboard/useBackgroundColor";
const Dashboard = () => {
  const { backgroundColor, avatar, isFetching } = useStoreState(
    (state) => state.user
  );

  const isRehydrated = useStoreRehydrated();

  useBackgroundColor(avatar);
  return (
    <>
      {isRehydrated && (
        <div
          className={styles.dashboard}
          style={{
            backgroundColor: `var(${backgroundColor})`,
            transition: "0.3s ease-in",
          }}
        >
          <div className={styles.userInfo}>
            <Avatar />
            <UserInfo />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Dashboard;
