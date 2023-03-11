import Layout from "@/components/layout";
import { ENDPOINT_SEED } from "@/config/constants";
import { getProfiles } from "@/services/getProfiles";
import { Profile, Response } from "@/types/profile";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Head from "next/head";

interface Props {
  profile: Profile;
}

const ProfileDetails = ({ profile }: Props): JSX.Element => {
  console.log(profile);

  return (
    <>
      <Head>
        <title>Perfil - Bkool</title>
        <meta
          name="description"
          content={`Information about ${profile.name.first} profile`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-yellow.png" />
      </Head>
      <Layout>
        <main>
          <article>
            <h1>Profile Details</h1>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
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
