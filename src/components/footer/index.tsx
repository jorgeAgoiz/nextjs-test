import Image from "next/image";
import Paragraph from "../paragraph";
import styles from "./footer.module.css";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <Paragraph text="Made with" variant="default" />
      <Image
        src="/icons/heart.svg"
        width={32}
        height={32}
        alt="Love"
        title="Love"
        className={styles.icon}
      />
      <Paragraph text="by Jorge Agoiz" variant="default" />
    </footer>
  );
};

export default Footer;
