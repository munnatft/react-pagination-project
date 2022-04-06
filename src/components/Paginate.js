import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../store/action';
import styles from './Paginate.module.css';

const Paginate = () => {

    const { totalPages , currentPage } = useSelector(state => state.passenger);
    const dispatch = useDispatch();

    let pageNumbers = [];
    for(let i=currentPage;i<=currentPage+9;i++){
        if(currentPage > 5) {
            pageNumbers.push(i-5);
        }
        else {
            pageNumbers.push(i);
        }
    }

    const handlePreviousClick = () => {
        dispatch(setCurrentPage(currentPage - 1))
    }

    const handleNextClick = () => {
        dispatch(setCurrentPage(currentPage + 1))
    }

    return (
        <div className={styles['btn-group']}>
            <button disabled={currentPage === 1} onClick={handlePreviousClick}>&#171;</button>
            <ul>
                {
                    pageNumbers.map((page) => {
                        return <li 
                                    key={page} 
                                    onClick={() => dispatch(setCurrentPage(page))}
                                    className={currentPage === page ? styles['active'] : ''}
                                >
                                    { page }
                                </li>
                    })
                }
            </ul>
            <button className={styles['btn-last']} disabled={currentPage === totalPages} onClick={handleNextClick}>&#187;</button>
        </div>
    )
}

export default Paginate
