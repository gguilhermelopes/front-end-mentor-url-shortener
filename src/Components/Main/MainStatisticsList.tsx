import { ReactComponent as BrandRecognition } from "../../Images/icon-brand-recognition.svg";
import { ReactComponent as DetailedRecords } from "../../Images/icon-detailed-records.svg";
import { ReactComponent as FullyCustomizable } from "../../Images/icon-fully-customizable.svg";
import styles from "./MainStatisticsList.module.css";

const statisticsOptions = [
  {
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content",
    svg: BrandRecognition,
  },
  {
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    svg: DetailedRecords,
  },
  {
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    svg: FullyCustomizable,
  },
];

const MainStatisticsList = () => {
  return (
    <ul className={`${styles.statisticsList}`}>
      {statisticsOptions.map((item) => {
        const SvgComponent = item.svg;
        return (
          <li className={styles.listItem} key={item.title}>
            <div className={styles.svg}>
              <SvgComponent />
            </div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MainStatisticsList;
