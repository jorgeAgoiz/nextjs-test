import Button from "@/components/button";
import Layout from "@/components/layout";
import ProfileDetailsCard from "@/components/profile-details-card";
import { COMPANY_NAME, ENDPOINT_SEED } from "@/config/constants";
import { getProfiles } from "@/services/getProfiles";
import styles from "@/styles/details-page.module.css";
import { Profile } from "@/types/profile";
import { addressParser } from "@/utils/addressParser";
import { fullnameParser } from "@/utils/fullnameParser";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";

interface Props {
  profile: Profile;
}

const ProfileDetails = ({ profile }: Props): JSX.Element => {
  const router: NextRouter = useRouter();
  const { street, postcode, city, country } = profile.location;

  return (
    <>
      <Head>
        <title>{`Profile Details - ${COMPANY_NAME}`}</title>
        <meta
          name="description"
          content={`Information about ${profile.name.first} profile`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-yellow.png" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <ProfileDetailsCard
            picture={profile.picture.large}
            fullName={fullnameParser(profile.name)}
            fullAdress={addressParser({
              name: street.name,
              number: street.number,
              postCode: postcode,
              city: city,
              country: country,
            })}
            locationDescription={profile.location.timezone.description}
            email={profile.email}
            phone={profile.phone}
            cell={profile.cell}
          />
          <Button
            text="Go back"
            type="button"
            variant="secondary"
            handleClick={() => router.push("/profiles")}
          />
        </main>
      </Layout>
    </>
  );
};

export const getServerSideProps = async ({ params }: { params: Params }) => {
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
