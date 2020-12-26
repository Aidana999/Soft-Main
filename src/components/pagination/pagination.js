import React from "react";
import ReactPaginate from "react-paginate";
import css from "./pagination.css";
import prev from "./photo_2020-09-13_15-56-42.jpg";
import next from "./photo_2020-09-13_15-59-11.jpg";

const Pagination = (props) => {
  return (
    <div className={css.wrapper}>
      <ReactPaginate
        previousLabel={<img src={prev} alt="next" />}
        nextLabel={<img src={next} alt="next" />}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={props.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(selectedItem) => {
          props.setPage(selectedItem.selected);
        }}
        containerClassName={css.pagination}
        activeClassName={css.active}
      />
    </div>
  );
};

export default Pagination;
