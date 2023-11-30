import {useState} from "react";

const useTable = () => {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const paginationValueProps = {
    limit,
    offset,
  };
  const paginationSetValueProps = {
    setLimit,
    setOffset,
  };

  return {paginationValueProps, paginationSetValueProps};
};

export default useTable;
