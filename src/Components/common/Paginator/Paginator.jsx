import style from './Paginator.module.css'
const Paginator = ({pages, current_page, onChangePage}) => {
    return (
        <div className={style.pagination}>
            {pages.map((page) => <button className={`${style.page_num} ${page === current_page ? style.active_page : ''}`}
                onClick={() => onChangePage(page)} key={page}>{page}</button>)}
        </div>
    )
}

export default Paginator