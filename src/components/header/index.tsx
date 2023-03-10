import styles from "@/components/header/Header.module.css";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <h1>Bkool - Profiler Finder</h1>
    </header>
  );
};

export default Header;
