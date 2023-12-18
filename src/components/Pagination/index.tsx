import * as Styles from './pagination.styles'

interface PaginationProps {
    currentPage: number,
    totalPages: number,
    setPage: (page: number) => void
}

const Pagination = (prop: PaginationProps) => {
    const pages = Array.from({ length: prop.totalPages }, (_, i) => i + 1)

    return (
        <Styles.PagesContainer>
            {pages.map(page => ( 
                <Styles.PaginationButton key={page} onClick={() => prop.setPage(page)}> {page}</Styles.PaginationButton>
            ))}
        </Styles.PagesContainer>
    )
}

export default Pagination