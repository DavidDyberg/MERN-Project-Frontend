

interface PaginationProps {
    currentPage: number,
    totalPages: number,
    setPage: (page: number) => void
}

const Pagination = (prop: PaginationProps) => {
    const pages = Array.from({ length: prop.totalPages }, (_, i) => i + 1)

    return (
        <div>
            {pages.map(page => ( 
                <button key={page} onClick={() => prop.setPage(page)}> {page}</button>
            ))}
        </div>
    )
}

export default Pagination