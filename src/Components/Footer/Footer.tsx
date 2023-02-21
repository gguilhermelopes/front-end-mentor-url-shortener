import { ReactComponent as Logo } from "../../Images/logo.svg";
import { ReactComponent as FacebookIcon } from "../../Images/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "../../Images/icon-instagram.svg";
import { ReactComponent as PinterestIcon } from "../../Images/icon-pinterest.svg";
import { ReactComponent as TwitterIcon } from "../../Images/icon-twitter.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <footer className={`${styles.footer} container`}>
        <Logo />
        <ul>
          <h3>Features</h3>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
        <ul>
          <h3>Resources</h3>
          <li>Blog</li>
          <li>Developers</li>
          <li>Links</li>
        </ul>
        <ul>
          <h3>Company</h3>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
        <div className={styles.icons}>
          <FacebookIcon />
          <TwitterIcon />
          <PinterestIcon />
          <InstagramIcon />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
