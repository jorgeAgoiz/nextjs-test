import { Name } from "@/types/profile";

export const fullnameParser = ({ title, first, last }: Name): string => {
  return title.concat(" ", first).concat(" ", last);
};
