import { FunctionComponent } from "react";
import Button from "../Helpers/Button";
import useMobile from "../Hooks/useMobile";
import styles from "./MainTitle.module.css";

interface MainTitleProps {
  title: string;
  subtitle: string;
}

const MainTitle: FunctionComponent<MainTitleProps> = ({ title, subtitle }) => {
  const mobile = useMobile("(max-width: 600px)");
  return (
    <>
      {mobile ? <div className={styles.illustration}></div> : null}
      <div className={`${styles.mainTitleWrapper} container`}>
        <div className={styles.mainTitleInfo}>
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
          <Button content="Get Started" />
        </div>
      </div>
    </>
  );
};

export default MainTitle;
