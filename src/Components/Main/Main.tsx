import { useState } from "react";
import Button from "../Helpers/Button";
import Input from "../Helpers/Input";
import styles from "./Main.module.css";

const Main = () => {
  const [linkvalue, setLinkvalue] = useState("");
  return (
    <section className={`${styles.mainSection} container`}>
      <form className={styles.form}>
        <Input
          id="linkShortener"
          placeholder="Shorten a link here..."
          type="text"
          value={linkvalue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setLinkvalue(event.target.value)
          }
        />
        <Button content="Shorten It!" />
      </form>
      <ul>
        <li>
          https://www.google.com.br{" "}
          <span>
            https://lasllas.com <Button content="Copy" />
          </span>
        </li>
        <li>
          https://www.google.com.br{" "}
          <span>
            https://lasllas.com <Button content="Copy" />
          </span>
        </li>
        <li>
          https://www.google.com.br{" "}
          <span>
            https://lasllas.com <Button content="Copy" />
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Main;
