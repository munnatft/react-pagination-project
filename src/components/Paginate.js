import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../store/action';
import styles from './Paginate.module.css';

const Paginate = () => {

    const { totalPages , currentPage } = useSelector(state => state.passenger);
    const dispatch = useDispatch();

    let pageNumbers = [];
    for(let i=currentPage;i<=currentPage+5 && currentPage < totalPages;i++){
        if(currentPage > 6) {
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
    // const pageBetween = currentPage >=3 && currentPage < 6;
    return (
        <div className={styles['btn-group']}>
            <button disabled={currentPage === 0} onClick={handlePreviousClick}>&#171;</button>
            <ul>
                {
                    currentPage >= 3 && 
                    <li  onClick={() => dispatch(setCurrentPage(0))}>1...</li>
                }
                {
                    pageNumbers.map((page) => {
                        return <li 
                                    key={page} 
                                    onClick={() => dispatch(setCurrentPage(page))}
                                    className={currentPage === page ? styles['active'] : ''}
                                >
                                    { page + 1 }
                                </li>
                    })
                }
                {
                    currentPage < totalPages-3 && 
                    <li  onClick={() => dispatch(setCurrentPage(totalPages-1))}>...{totalPages}</li>
                }
            </ul>
            <button className={styles['btn-last']} disabled={currentPage >= totalPages-1} onClick={handleNextClick}>&#187;</button>
        </div>
    )
}

export default Paginate
