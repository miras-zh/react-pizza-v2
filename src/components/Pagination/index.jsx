import React from "react";
import style from "./pagination.module.scss";
import ReactPaginate from "react-paginate";

function Pagination({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = React.useState(null);
    const [pageCount, setPageCount] = React.useState(0);
    const [itemOffset, setItemOffset] = React.useState(0);

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    React.useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
      };
  return (
    <div className={style.root}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={4}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;
