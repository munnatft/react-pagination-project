import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleFetchPassgengerList, toggleLoading } from '../store/action';
import styles from './PassengerLists.module.css';
import Spinner from './UI/Spinner';

const PassengerLists = () => {
    
    const dispatch = useDispatch();
    const {listOfPassengers , loading , currentPage} = useSelector(state => state.passenger);

    useEffect(() => {
        dispatch(handleFetchPassgengerList(currentPage))
    },[dispatch , currentPage])


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
                        listOfPassengers.length > 0 &&
                        listOfPassengers.map((passenger,index) => {
                            return (
                                <tr key={passenger._id}>
                                    <td>{currentPage*10 + index+1}</td>
                                    <td>{passenger.name}</td>
                                    <td>{passenger.trips}</td>
                                    <td>{passenger.airline[0].name}</td>
                                    <td>{passenger.airline[0].country}</td>
                                </tr>
                            )
                        })
                    }

                    {/* {
                        listOfPassengers.length === 0 && <tr><td>No list of passengers found</td></tr>
                    } */}
                    
                </tbody>
            </table>
        // </div>
    )
}

export default PassengerLists
