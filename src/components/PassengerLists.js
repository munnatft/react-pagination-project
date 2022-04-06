import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleFetchPassgengerList } from '../store/action';
import styles from './PassengerLists.module.css';
import Spinner from './UI/Spinner';

const PassengerLists = () => {
    
    const dispatch = useDispatch();
    const { loading , passengerLists , currentPage  } = useSelector(state => state.passenger);

    useEffect(() => {
        // if a page is already visited then the action will not be dispatched and api will not be called again for the visited page. 
        if(!passengerLists[currentPage]) {
            dispatch(handleFetchPassgengerList(currentPage))
        } 
        
    },[dispatch , passengerLists , currentPage])


    if(loading) {
        return <Spinner />;
    }
    return (
        // <div className={styles.responsive}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Trips</th>
                        <th>Airline Name</th>
                        <th>Airline Country</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        passengerLists[currentPage]?.length > 0 &&
                        passengerLists[currentPage].map((passenger,index) => {
                            return (
                                <tr key={passenger._id}>
                                    <td>{(currentPage)*10 + index+1}</td>
                                    <td>{passenger.name}</td>
                                    <td>{passenger.trips}</td>
                                    <td>{passenger.airline[0].name}</td>
                                    <td>{passenger.airline[0].country}</td>
                                </tr>
                            )
                        })
                    }

                    {
                        passengerLists[currentPage]?.length === 0 && <tr><td className={styles['not-found']}>No list of passengers found</td></tr>
                    }
                    
                </tbody>
            </table>
        // </div>
    )
}

export default PassengerLists
