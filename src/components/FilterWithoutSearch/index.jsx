import { useState } from "react"

function FilterWithoutSearch() {
  const handlePostsPerPageChange = (e) => {
    setPostsPerPage(Number(e.target.value))
    setCurrentPage(1)
  }
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)

  return (
    <>
      <div className="jorge-container-search">
        <div>
          <button
            className="btn btn-style-7"
            id="mad-filter-toggle">
            <i className="material-icons">tune</i>
            <span>
              Filtros
            </span>
          </button>
        </div>
        <div className="jorge-select-bar">
          <span>
            Filas por página
          </span>
          <div className="mad-col jorge-select-container-row-per-page mad-custom-selectx size-4">
            <select
              className="jorge-select-row-per-page"
              data-default-text="5"
              value={postsPerPage}
              onChange={handlePostsPerPageChange}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mad-search-section jorge-search-bar">
        <div className="mad-col jorge-search-input-container">
          <input
            type="text"
            placeholder="Buscar..."
            className="jorge-input-search"
          />
        </div>
        <button type="submit">
          <i style={{ color: "#26658c" }} className="material-icons">
            search
          </i>
        </button>
      </div>
    </>
  )
}

export default FilterWithoutSearch