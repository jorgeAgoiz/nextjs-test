import { Profile } from "@/types/profile";
import ProfileCard from "../profile-card";
import styles from "./list.module.css";

interface Props {
  elements: Array<Profile | any>;
}

const List = ({ elements }: Props): JSX.Element => {
  return (
    <div
      className={styles.list__container}
      role="region"
      aria-label="List of profiles"
    >
      {elements?.length > 0 &&
        elements.map((profile) => (
          <ProfileCard
            key={profile.login.username}
            name={profile.name.first}
            city={profile.location.city}
            picture={profile.picture.large}
          />
        ))}
    </div>
  );
};

export default List;
