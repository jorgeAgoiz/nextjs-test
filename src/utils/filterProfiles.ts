import { Profile } from "@/types/profile";

interface Args {
  profiles: Array<Profile>;
  keyword: string;
}

export const filterProfiles = ({ profiles, keyword }: Args): Array<Profile> => {
  const parsedKeyword: string = keyword.toLowerCase();

  const filteredResults: Array<Profile> = profiles.filter((profile) => {
    const locationArray: Array<string> = Object.values(profile.location)
      .filter((elem) => typeof elem === "string")
      .map((elem) => elem.toLowerCase());

    const nameArray: Array<string> = Object.values(profile.name)
      .filter((elem) => typeof elem === "string")
      .map((elem) => elem.toLowerCase());

    return (
      locationArray.includes(parsedKeyword) || nameArray.includes(parsedKeyword)
    );
  });

  return filteredResults;
};
