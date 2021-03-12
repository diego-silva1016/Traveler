import React, { useState } from 'react';

import ReactPaginate, { ReactPaginateProps } from 'react-paginate';

import './styles.scss';

interface PaginationProps extends ReactPaginateProps {
    page: number;
}

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  marginPagesDisplayed,
  pageRangeDisplayed,
  page,
}) => (
  <ReactPaginate
    pageCount={pageCount}
    forcePage={page - 1}
    marginPagesDisplayed={marginPagesDisplayed}
    pageRangeDisplayed={pageRangeDisplayed}
    containerClassName="paginationContainer"
    previousClassName="previus"
    nextClassName="next"
    activeClassName="active"
    pageClassName="page"
  />
);

export default Pagination;
