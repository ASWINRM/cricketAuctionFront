import React from 'react';
import Pagination from '@mui/material/Pagination';
const PagePagination = ({ CardsPerPage, totalCards, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / CardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
       
          
                {/* <Pagination count={pageNumbers} color="secondary"
                onChange={(e)=>{paginate(e.target.textContent)}}
                /> */}
           
          
      
      </ul>
    </nav>
  );
};

export default PagePagination;