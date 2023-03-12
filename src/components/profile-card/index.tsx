import Image from "next/image";
import Link from "next/link";
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
      className={styles.a}
      title={name}
    >
      <article className={styles.article} aria-labelledby={`profile-${name}`}>
        <h1 id={`profile-${name}`} className={styles.heading}>
          {name}
        </h1>
        <p className={styles.paragraph}>{city}</p>
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
