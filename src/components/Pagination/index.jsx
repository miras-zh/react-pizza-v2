import React from "react";
import style from "./pagination.module.scss";
import ReactPaginate from "react-paginate";

function Pagination({ onPageChange }) {
    const [currentItems, setCurrentItems] = React.useState(null);
    const [pageCount, setPageCount] = React.useState(0);
    const [itemOffset, setItemOffset] = React.useState(0);

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <div className={style.root}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={event=>onPageChange(event.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={4}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;
