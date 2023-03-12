import Layout from "@/components/layout";
import Title from "@/components/title";
import { COMPANY_NAME } from "@/config/constants";
import Head from "next/head";
import styles from "./home.module.css";

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Home Page - {COMPANY_NAME}</title>
        <meta
          name="description"
          content={`Home Page of ${COMPANY_NAME} Skill Test`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-yellow.png" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <section className={styles.section} aria-labelledby="home-title">
            <Title text={`Skill Test - ${COMPANY_NAME}`} variant="info" />
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Home;
