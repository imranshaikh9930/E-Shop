import React from 'react';
import "../../App.css";
import { useContext } from "react"
import { ShopContext } from "../../Context/State_Context"

function Pagination() {
    const {page,setCurrentPage,currentPage} = useContext(ShopContext);

  return (
    <div className="pagination">
      {page.map((page, index) => {
        return (
         
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
                className={page === currentPage ? "active" : ""}
            >
              {page}
            </button>

        )
      })}
    </div>
  )
}

export default Pagination