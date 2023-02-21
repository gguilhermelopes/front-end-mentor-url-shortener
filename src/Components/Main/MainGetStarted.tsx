import Button from "../Helpers/Button";
import styles from "./MainGetStarted.module.css";

const MainGetStarted = () => {
  return (
    <div className={`${styles.getStartedWrapper}`}>
      <h1>Boost your links today</h1>
      <Button content="Get Started" />
    </div>
  );
};

export default MainGetStarted;
