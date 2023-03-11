import CustomLink from "@/components/custom-link";
import Layout from "@/components/layout";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

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
            <h1 id="home-title">Choose an option</h1>
            <div className={styles.container} role="region">
              <CustomLink
                url="/profiles"
                text="Full Profiles List"
                title="Go to full profiles list page"
              />
              <CustomLink
                url="/searcher"
                text="Advanced Searcher"
                title="Go to advanced searcher page"
              />
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Home;
