import Layout from "@/components/Layout";
import { getProfiles } from "@/services/getProfiles";
import styles from "@/styles/Home.module.css";
import { Profile } from "@/types/profile";
import Head from "next/head";
import Link from "next/link";

interface Props {
  profiles: Array<Profile>;
}

const Home = ({ profiles }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Bkool - Profiles List</title>
        <meta name="description" content="List of profiles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <section className={styles.section}>
            <h1>Profiles List</h1>
            {profiles.map((profile) => (
              <>
                <h1 key={profile.email}>{profile.name.first}</h1>
                <Link
                  href={`profile/${profile.name.first.replaceAll(" ", "-")}`}
                >
                  {profile.email}
                </Link>
              </>
            ))}
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await getProfiles();

  return {
    props: {
      profiles: data.results,
    },
    revalidate: 1,
  };
};
