import { useState } from "react";
import RecordList from "./RecordesList";
import styles from "./CaloriesRecordForm.module.css"
function ListingRecord(props) {
    const { allRecords } = props;
    const [currentDate, setCurrentDate] = useState(new Date());
    const dateChangeHandler = (event) => {
        setCurrentDate(new Date(event.target.value))
    };
    
    const dateFilter = (record) => {
        return record.date.getDate() === currentDate.getDate() &&
            record.date.getMonth() === currentDate.getMonth() && record.date.getFullYear() === currentDate.getFullYear();
    };

    return (
        <>
            <label className={styles.select} htmlFor="ListingDate">Select Date</label>
            <input className={styles.input} onChange={dateChangeHandler} value={currentDate.toISOString().split('T')[0]} type="date"/>
            <RecordList records={allRecords.filter(dateFilter)} />
        </>
    );

}

export default ListingRecord;