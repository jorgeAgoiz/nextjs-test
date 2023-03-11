import { ENDPOINT_URL } from "@/config/constants";
import { Response } from "@/types/profile";

interface Args {
  amount?: number;
  seed: string;
}

export const getProfiles = ({ amount = 50, seed }: Args): Promise<Response> => {
  return fetch(`${ENDPOINT_URL}?results=${amount}&seed=${seed}`).then(
    (result) => result.json()
  );
};
