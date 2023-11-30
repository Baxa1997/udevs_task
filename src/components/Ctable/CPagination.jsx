import ReactPaginate from "react-paginate";
import styles from "./style.module.scss";
import Select from "react-select";

export default function Pagination({limit, setLimit, setOffset, dataLength}) {
  const limits = [
    {label: 1, value: 1},
    {label: 5, value: 5},
    {label: 10, value: 10},
    {label: 15, value: 15},
    {label: 25, value: 25},
    {label: 50, value: 50},
  ];

  const handleLimit = (pageLimit) => {
    if (pageLimit) {
      setLimit(pageLimit?.value);
      setOffset(0);
    }
  };

  const handleOffset = (pageOffset) => {
    setOffset(pageOffset?.selected);
  };

  return (
    <div className={styles.pagination}>
      <Select
        value={{value: limit, label: limit}}
        onChange={handleLimit}
        options={limits}
      />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handleOffset}
        pageRangeDisplayed={1}
        breakLabel="..."
        activeClassName={styles.activePage}
        pageCount={Math.ceil(dataLength / limit)}
        previousLabel="< previous"
        containerClassName={styles.container}
        pageClassName={styles.pageItem}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
