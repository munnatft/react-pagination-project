import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleFetchPassgengerList } from '../store/action';
import styles from './PassengerLists.module.css';
import Spinner from './UI/Spinner';

const PassengerLists = () => {
    console.log("first time")
    const dispatch = useDispatch();
    const {listOfPassengers , loading} = useSelector(state => state.passenger);

    useEffect(() => {
        dispatch(handleFetchPassgengerList(0))
    },[dispatch])

    console.log(listOfPassengers)

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
                                    <td>{index+1}</td>
                                    <td>{passenger.name}</td>
                                    <td>{passenger.trips}</td>
                                    <td>{passenger.airline[0].name}</td>
                                    <td>{passenger.airline[0].country}</td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        // </div>
    )
}

export default PassengerLists
