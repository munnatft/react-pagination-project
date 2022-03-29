import { useDispatch, useSelector } from 'react-redux';
import styles from './Paginate.module.css';

const Paginate = () => {

    const { currentPage , totalPages } = useSelector(state => state.passenger);
    const dispatch = useDispatch();

    const handlePreviousClick = () => {}

    const handleNextClick = () => {
        console.log("next click")
    }

    return (
        <div className={styles['btn-group']}>
            <button disabled={currentPage === 0} onClick={handlePreviousClick}>Previous</button>
            <button disabled={currentPage === totalPages} onClick={handleNextClick}>Next</button>
        </div>
    )
}

export default Paginate
