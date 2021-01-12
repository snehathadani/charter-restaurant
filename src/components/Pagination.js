const Pagination = ({itemCount, pageSize, currentPage, onPageChange}) => {
    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount === 1) return null
    const pages = Array.from({length: pageCount}, (_, i) => i + 1)
    return (
        <div>
            <div className="pagination">
                {pages.map(page => (
                    <div href={null} key={page}
                        onClick={() => onPageChange(page)}
                        className={page === currentPage ? 'active' : 'page-item'}>
                        {page}
                    </div>
                ))}
            
            </div>
            <div className="page-settings">page {currentPage} of {pageCount}</div>
        </div>
    )
}

export default Pagination