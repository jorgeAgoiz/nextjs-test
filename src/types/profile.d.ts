export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Location {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Profile {
  gender: "male" | "female";
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name?: string;
    value?: string;
  };
  picture: Picture;
  nat: string;
}

interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface Response {
  results: Array<Profile>;
  info: Info;
}
