import Image from "next/image";
import styles from "./footer.module.css";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.heading}>Made with</h1>
      <Image
        src="/icons/heart.svg"
        width={32}
        height={32}
        alt="Love"
        title="Love"
        className={styles.icon}
      />
      <h1 className={styles.heading}>by Jorge Agoiz</h1>
    </footer>
  );
};

export default Footer;
