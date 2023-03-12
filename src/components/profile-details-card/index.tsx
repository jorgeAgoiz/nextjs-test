import Image from "next/image";
import Paragraph from "../paragraph";
import Title from "../title";
import styles from "./profile-details-card.module.css";

interface Props {
  picture: string;
  fullName: string;
  fullAdress: string;
  locationDescription: string;
  email: string;
  phone: string;
  cell: string;
}

const ProfileDetailsCard = ({
  picture,
  fullName,
  fullAdress,
  locationDescription,
  email,
  phone,
  cell,
}: Props): JSX.Element => {
  return (
    <section className={styles.container} aria-labelledby="title-details">
      <Title id="title-details" text="Profile Details" variant="success" />
      <article className={styles.basic}>
        <Image
          src={picture}
          alt={fullName}
          width={120}
          height={120}
          className={styles.image}
          priority
        />
        <Title text={fullName} variant="subtitle" />
      </article>
      <section
        aria-label="Personal information about profile"
        className={styles.personal}
      >
        <article className={styles.personal__article}>
          <Title text="Location" variant="info" />
          <Paragraph text={fullAdress} />
          <Paragraph text={locationDescription} />
        </article>
        <article className={styles.personal__article}>
          <Title text="Contact" variant="info" />
          <Paragraph text={`Email: ${email}`} />
          <Paragraph text={`Telephone number: ${phone ?? cell}`} />
        </article>
      </section>
    </section>
  );
};

export default ProfileDetailsCard;
