import { useState } from "react";
import Button from "../Helpers/Button";
import Input from "../Helpers/Input";
import styles from "./Main.module.css";
import MainGetStarted from "./MainGetStarted";
import MainStatistics from "./MainStatistics";

interface DataInterface {
  originalLink: string;
  shortLink: string;
  code: string;
}

const Main = () => {
  const [linkValue, setLinkValue] = useState("");
  const [error, setError] = useState<string | undefined>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<DataInterface[]>([]);

  async function fetchData(url: string) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();
      setLoading(false);
      if (response.ok) {
        setError("");
        if (data.length < 3) {
          setData([
            {
              originalLink: json.result.original_link,
              shortLink: json.result.full_short_link,
              code: json.result.code,
            },
            ...data,
          ]);
        } else {
          data.pop();
          setData([
            {
              originalLink: json.result.original_link,
              shortLink: json.result.full_short_link,
              code: json.result.code,
            },
            ...data,
          ]);
        }
      } else {
        setError(json.error);
      }
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    fetchData(`https://api.shrtco.de/v2/shorten?url=${linkValue}`);
    setLinkValue("");
  }

  return (
    <div className={styles.mainSectionWrapper}>
      <section className={`${styles.mainSection} container`}>
        <form className={styles.form}>
          <Input
            error={error}
            id="linkShortener"
            placeholder="Shorten a link here..."
            type="text"
            value={linkValue}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setLinkValue(event.target.value)
            }
          />
          <Button
            disabled={!linkValue ? true : false}
            onClick={handleClick}
            content="Shorten It!"
          />
        </form>
        <ul className={styles.linkList}>
          {data &&
            data.map((item) => (
              <li key={item.code}>
                {item.originalLink}
                <span>
                  {item.shortLink} <Button content="Copy" />
                </span>
              </li>
            ))}
        </ul>
      </section>
      <MainStatistics />
      <MainGetStarted />
    </div>
  );
};

export default Main;
