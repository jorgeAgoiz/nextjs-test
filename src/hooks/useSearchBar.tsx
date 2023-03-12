import { Profile } from "@/types/profile";
import { filterProfiles } from "@/utils/filterProfiles";
import { ChangeEvent, FormEvent, useState } from "react";

interface State {
  filteredData: Array<Profile>;
  keyword: string;
  message: string;
  loading: boolean;
}
interface Props {
  profiles: Array<Profile>;
}

const useSearchBar = ({ profiles }: Props) => {
  const [filteredData, setFilteredData] = useState<State["filteredData"]>([]);
  const [keyword, setKeyword] = useState<State["keyword"]>("");
  const [message, setMessage] = useState<State["message"]>("");
  const [loading, setLoading] = useState<State["loading"]>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value: string = event.target.value;
    setKeyword(value);
  };

  const handleReset = (): void => {
    if (filteredData.length > 0) {
      setFilteredData([]);
    }
    setMessage("");
    setKeyword("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    setTimeout(() => {
      const result = filterProfiles({
        profiles,
        keyword,
      });
      if (result.length <= 0 && keyword.length > 0) {
        setFilteredData([]);
        setMessage("No matches found...");
        setLoading(false);
        return;
      }
      setLoading(false);
      setFilteredData(result);
      setKeyword("");
    }, 2000);
  };

  return {
    handleChange,
    handleReset,
    handleSubmit,
    message,
    loading,
    keyword,
    filteredData,
  };
};

export default useSearchBar;
