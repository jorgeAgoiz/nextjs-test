import Layout from "@/components/layout";
import ProfileCard from "@/components/profile-card";
import { ENDPOINT_SEED } from "@/config/constants";
import styles from "@/pages/profiles/List.module.css";
import { getProfiles } from "@/services/getProfiles";
import { Profile } from "@/types/profile";
import Head from "next/head";

interface Props {
  profiles: Array<Profile>;
}

const ProfileList = ({ profiles }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Bkool - Profiles List</title>
        <meta name="description" content="List of profiles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-yellow.png" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <section className={styles.section} aria-labelledby="list-title">
            <h1 id="list-title">Profiles List</h1>
            <div className={styles.container} role="region">
              {profiles.map((profile) => (
                <ProfileCard
                  key={profile.login.username}
                  name={profile.name.first}
                  city={profile.location.city}
                  picture={profile.picture.large}
                />
              ))}
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default ProfileList;

export const getStaticProps = async () => {
  const data = await getProfiles({ amount: 50, seed: ENDPOINT_SEED });

  return {
    props: {
      profiles: data.results,
    },
    revalidate: 1,
  };
};
