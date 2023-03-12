import Layout from "@/components/layout";
import Title from "@/components/title";
import Head from "next/head";
import styles from "./home.module.css";

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Bkool - Home Page</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-yellow.png" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <section className={styles.section} aria-labelledby="home-title">
            <Title text="Skill Test - Bkool" variant="info" />
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Home;
