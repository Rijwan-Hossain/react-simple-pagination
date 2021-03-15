import React, {useRef} from 'react';
import ReactPaginate from 'react-paginate'
// import "bootstrap/scss/bootstrap.scss"; 
import './pagination.css' 

function MyPagination(props) { 
    let { limit, page, total, setNewPage  } = props; 

    const pagination = useRef();
    return ( 
        <> 
            <ReactPaginate 
                ref={pagination} 
                previousLabel={<>&laquo;</>} 
                nextLabel={<>&raquo;</>} 

                pageCount={Math.ceil(total / limit)} 
                pageRangeDisplayed={3} 
                marginPagesDisplayed={2} 

                onPageChange={setNewPage} 


                containerClassName="web-pagination" 
                activeClassName="web-pagination-active" 
                pageLinkClassName="web-pagination-page-link" 
                breakLinkClassName="web-pagination-page-link" 
                nextLinkClassName="web-pagination-page-link" 
                previousLinkClassName="web-pagination-page-link" 
                pageClassName="web-pagination-page-item" 
                breakClassName="web-pagination-page-item" 
                nextClassName="web-pagination-page-item" 
                previousClassName="web-pagination-page-item" 
            /> 
        </> 
    ) 
} 

export default MyPagination; 