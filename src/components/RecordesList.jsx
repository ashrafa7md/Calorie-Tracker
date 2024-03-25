/* eslint-disable*/
import CalorieRecored from "./calorieRecored";
import styles from "./CalorieRecord.module.css"
function RecordList(props) {
    return props.records?.length ?(
        <ul className={styles['record-list']}>
            {props.records.map(record =>
            record.calorie >= 0 &&(
                <li key={record.id} className={styles['list-item']}>
                <CalorieRecored
                    date={record.date}
                    meal={record.meal}
                    content={record.content}
                    calorie={record.calorie}
                />
            </li>
            ))}
        </ul>
    ) : (
        <div className={styles.placeholder}>No records found for this date</div>
    );
}
export default RecordList;