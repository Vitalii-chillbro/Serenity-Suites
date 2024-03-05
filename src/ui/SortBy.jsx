import { useSearchParams } from "react-router-dom";

import Select from "./Select";

const SortBy = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  const handleCHange = (e) => {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  };
  return (
    <Select
      options={options}
      type="white"
      value={sortBy}
      onChange={handleCHange}
    />
  );
};

export default SortBy;
