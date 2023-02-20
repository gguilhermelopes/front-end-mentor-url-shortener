import MainStatisticsTitle from "./MainStatisticsTitle";
import styles from "./MainStatistics.module.css";
import MainStatisticsList from "./MainStatisticsList";

const MainStatistics = () => {
  return (
    <section className={`${styles.section} container`}>
      <MainStatisticsTitle
        title="Advanced Statistics"
        subtitle="Track how your links are performing across the web with our
  advanced statistics dashboard."
      />
      <MainStatisticsList />
    </section>
  );
};

export default MainStatistics;
