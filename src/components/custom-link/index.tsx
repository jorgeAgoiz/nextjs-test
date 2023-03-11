import Link from "next/link";
import styles from "./custom-link.module.css";

interface Props {
  url: string;
  text: string;
  title?: string;
}

const CustomLink = ({ url, text, title }: Props): JSX.Element => (
  <Link href={url} className={styles.link} title={title ?? text}>
    {text}
  </Link>
);

export default CustomLink;
