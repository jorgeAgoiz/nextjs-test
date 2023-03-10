import { getProfiles } from "@/services/getProfiles";
import { Profile, Response } from "@/types/profile";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

interface Props {
  data: Profile;
}

const ProfileDetails = ({ data }: Props): JSX.Element => {
  console.log(data);

  return (
    <div>
      <h1>{data.name.first}</h1>
    </div>
  );
};

export async function getStaticPaths() {
  const profiles: Response = await getProfiles();
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
}

export async function getStaticProps({ params }: { params: Params }) {
  const { username } = params;
  const profiles = await getProfiles();
  const data = profiles.results.find((profile) => {
    const firstNameParsed = profile.name.first.replaceAll(" ", "-");
    return firstNameParsed === username;
  });

  return {
    props: {
      data,
    },
  };
}

export default ProfileDetails;
