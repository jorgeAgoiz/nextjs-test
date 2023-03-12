import CustomLink from "../custom-link";
import styles from "./header.module.css";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <CustomLink text="Home" url="/" title="Go to Home Page" />
      <CustomLink
        text="Searcher Profile"
        url="/profiles"
        title="Go to Searcher Profile"
      />
    </header>
  );
};

export default Header;
