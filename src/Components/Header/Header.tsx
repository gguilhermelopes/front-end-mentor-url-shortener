import { ReactComponent as Logo } from "../../Images/logo.svg";
import styles from "./Header.module.css";
import Button from "../Helpers/Button";
import useMobile from "../Hooks/useMobile";
import { useState } from "react";

const Navbar = () => {
  const mobile = useMobile("(max-width:900px)");
  const [mobileMenu, setMobileMenu] = useState<Boolean>(false);

  return (
    <header
      className={`${styles.header} container ${mobile ? styles.mobile : ""}`}
    >
      {mobile ? (
        <div>
          <Logo />
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className={styles.mobileButton}
          ></button>
        </div>
      ) : (
        <Logo />
      )}

      <nav className={`${styles.nav} ${mobileMenu ? styles.active : ""}`}>
        <div>
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Resources</a>
        </div>
        <div>
          <a href="/">Login</a>
          <Button content="Sign Up" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
