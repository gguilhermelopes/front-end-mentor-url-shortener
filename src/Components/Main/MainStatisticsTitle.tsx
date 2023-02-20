import { FunctionComponent } from "react";
import styles from "./MainStatisticsTitle.module.css";

interface TitleProps {
  title: string;
  subtitle: string;
}

const MainStatisticsTitle: FunctionComponent<TitleProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className={styles.statisticsTitle}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </div>
  );
};

export default MainStatisticsTitle;
