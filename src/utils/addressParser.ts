interface Args {
  name: string;
  number?: number;
  postCode?: number;
  city?: string;
  country?: string;
}

export const addressParser = ({
  name,
  number,
  postCode,
  city,
  country,
}: Args): string => {
  return `${name}, ${number}, ${postCode} ${city} ${country}`;
};
