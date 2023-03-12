import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import List from "@/components/list";
import Spinner from "@/components/spinner";
import Title from "@/components/title";
import { COMPANY_NAME, ENDPOINT_SEED } from "@/config/constants";
import useSearchBar from "@/hooks/useSearchBar";
import { getProfiles } from "@/services/getProfiles";
import { Profile } from "@/types/profile";
import Head from "next/head";
import styles from "./searcher.module.css";

interface Props {
  profiles: Array<Profile>;
}

const Searcher = ({ profiles }: Props): JSX.Element => {
  const {
    handleChange,
    handleReset,
    handleSubmit,
    loading,
    message,
    keyword,
    filteredData,
  } = useSearchBar({ profiles });

  return (
    <>
      <Head>
        <title>Profile Search Engine - {COMPANY_NAME}</title>
        <meta name="description" content="Advanced profile search engine" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-yellow.png" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <section className={styles.section} aria-labelledby="searcher-title">
            <Title id="searcher-title" text="Search Engine" variant="info" />
            <form onSubmit={handleSubmit} className={styles.form__container}>
              <Input
                type="text"
                name="keyword"
                placeholder="Search by first name, last name, country or city..."
                onChange={handleChange}
                value={keyword}
              />
              <div
                className={styles.buttons__container}
                role="region"
                aria-label="Form action buttons"
              >
                <Button type="submit" text="Search" variant="primary" />
                <Button
                  type="button"
                  text="Clear results"
                  handleClick={handleReset}
                  variant="secondary"
                />
              </div>
            </form>
            {message && <Title text={message} variant="error" />}
          </section>
          <section className={styles.section} aria-labelledby="list-title">
            <Title id="list-title" text="Profiles List" variant="info" />
            {loading && <Spinner />}
            {filteredData.length <= 0 && !loading && (
              <List elements={profiles} />
            )}
            {filteredData.length > 0 && !loading && (
              <List elements={filteredData} />
            )}
          </section>
        </main>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await getProfiles({ amount: 50, seed: ENDPOINT_SEED });

  return {
    props: {
      profiles: data.results,
    },
    revalidate: 1,
  };
};

export default Searcher;
