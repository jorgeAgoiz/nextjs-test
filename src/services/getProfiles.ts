import { Response } from "@/types/profile";

export const getProfiles = (): Promise<Response> => {
  return fetch("https://randomuser.me/api/?results=50").then((result) =>
    result.json()
  );
};
