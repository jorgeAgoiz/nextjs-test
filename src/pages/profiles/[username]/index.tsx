import Layout from "@/components/layout";
import Title from "@/components/title";
import { ENDPOINT_SEED } from "@/config/constants";
import { getProfiles } from "@/services/getProfiles";
import { Profile, Response } from "@/types/profile";
import { addressParser } from "@/utils/addressParser";
import { fullnameParser } from "@/utils/fullnameParser";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Head from "next/head";
import Image from "next/image";
import styles from "./profile-details.module.css";

interface Props {
  profile: Profile;
}

const ProfileDetails = ({ profile }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Profile Details - Bkool</title>
        <meta
          name="description"
          content={`Information about ${profile.name.first} profile`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-yellow.png" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <article className={styles.article}>
            <Title text="Profile Details" variant="info" />
            <section className={styles.basic}>
              <Image
                src={profile.picture.large}
                alt={profile.name.first}
                width={120}
                height={120}
                className={styles.image}
                priority
              />
              <h2>{fullnameParser(profile.name)}</h2>
            </section>
            <section className={styles.location}>
              <Title text="Location Information" variant="info" />
              <div className={styles.location__data} role="region">
                <h2>
                  {addressParser({
                    name: profile.location.street.name,
                    number: profile.location.street.number,
                    postCode: profile.location.postcode,
                    city: profile.location.city,
                    country: profile.location.country,
                  })}
                </h2>
              </div>
              <div className={styles.location__data} role="region">
                <h2>{profile.location.timezone.description}</h2>
              </div>
            </section>
            <section className={styles.contact}>
              <Title text="Contact Information" variant="info" />
              <div className={styles.contact__data} role="region">
                <h2>Email: {profile.email}</h2>
                <h2>Telephone number: {profile.phone ?? profile.cell}</h2>
              </div>
            </section>
          </article>
        </main>
      </Layout>
    </>
  );
};

export const getStaticPaths = async () => {
  const profiles: Response = await getProfiles({
    amount: 50,
    seed: ENDPOINT_SEED,
  });
  const paths = profiles.results.map((profile) => {
    return {
      params: {
        username: profile.name.first.replaceAll(" ", "-"),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: Params }) => {
  const { username } = params;
  const profiles = await getProfiles({ amount: 50, seed: ENDPOINT_SEED });
  const selectedProfile = profiles.results.find((profile) => {
    const firstNameParsed = profile.name.first.replaceAll(" ", "-");
    return firstNameParsed === username;
  });

  return {
    props: {
      profile: selectedProfile,
    },
  };
};

export default ProfileDetails;
