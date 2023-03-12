import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import List from "@/components/list";
import Title from "@/components/title";
import { ENDPOINT_SEED } from "@/config/constants";
import { getProfiles } from "@/services/getProfiles";
import { Profile } from "@/types/profile";
import { filterProfiles } from "@/utils/filterProfiles";
import Head from "next/head";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./searcher.module.css";

interface State {
  filteredData: Array<Profile>;
  keyword: string;
  message: string;
}
interface Props {
  profiles: Array<Profile>;
}

const Searcher = ({ profiles }: Props): JSX.Element => {
  const [filteredData, setFilteredData] = useState<State["filteredData"]>([]);
  const [keyword, setKeyword] = useState<State["keyword"]>("");
  const [message, setMessage] = useState<State["message"]>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value: string = event.target.value;
    setKeyword(value);
  };

  const handleReset = (): void => {
    if (filteredData.length > 0) {
      setFilteredData([]);
    }
    setKeyword("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setMessage("");
    const result = filterProfiles({
      profiles,
      keyword,
    });
    if (result.length <= 0 && keyword.length > 0) {
      setFilteredData([]);
      setMessage("No matches found...");
      return;
    }
    setFilteredData(result);
    setKeyword("");
  };

  return (
    <>
      <Head>
        <title>Profile Searcher - Bkool</title>
        <meta name="description" content="Advanced Profile Finder" />
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
              <div className={styles.buttons__container}>
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
            {filteredData.length <= 0 ? (
              <List elements={profiles} />
            ) : (
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
