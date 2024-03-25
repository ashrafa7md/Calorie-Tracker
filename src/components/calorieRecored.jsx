/* eslint-disable*/
import { useState } from 'react';
import styles from './CalorieRecord.module.css'
import style from './CalorieRecordDate.module.css'

function CalorieRecored(props) {
    
     const [calorie , setCalorie] = useState(props.calorie)
    const month = props.date.toLocaleString('default', { month: 'long' });
    const day = props.date.getDate();
    const year = props.date.getFullYear();
    const clickHandler = () => {
        console.log('Clicked');
        setCalorie(calorie + 10);
    }
    return (
        <ul className={styles.record}>
            <li className={`${style['record-date']}`}>
                <div className={style['record-date-month']}>{ month}</div>
                <div className={style['record-date-day']}>{ day}</div>
                <div className={style['record-date-year']}> { year}</div>
            </li>
        <li>{props.meal}</li>
        <li>{props.content}</li>
        <li className={`${styles['record-calories']} ${style['record-date']}`} onClick={clickHandler}>{calorie}</li>
        </ul>
    )
}
export default CalorieRecored;