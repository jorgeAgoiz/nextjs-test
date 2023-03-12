import Image from "next/image";
import Link from "next/link";
import Paragraph from "../paragraph";
import Title from "../title";
import styles from "./profile-card.module.css";

interface Props {
  picture: string;
  name: string;
  city: string;
}

const ProfileCard = ({ picture, name, city }: Props): JSX.Element => {
  return (
    <Link
      href={`profiles/${name.replaceAll(" ", "-")}`}
      className={styles.link}
      title={name}
    >
      <article className={styles.article} aria-labelledby={`profile-${name}`}>
        <Title id={`profile-${name}`} text={name} variant="subtitle" />
        <Paragraph text={city} variant="default" />
        <Image
          src={picture}
          alt={name}
          width={120}
          height={120}
          className={styles.image}
          priority
        />
      </article>
    </Link>
  );
};
export default ProfileCard;
