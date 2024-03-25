/* eslint-disable*/
import { useState } from 'react';
// import './CaloriesRecordForm.css';
import styles from './CaloriesRecordForm.module.css';

function CaloriesForm(props) {
    const Default_value = {
        date: "",
        content: "",
        meal: "",
        calorie: 0,
    }
    // const [date, setDate] = useState();
    // const [meal, setMeal] = useState();
    // const [content, setContent] = useState();
    // const [calorie, setCalorie] = useState();
    const [food, setFood] = useState({Default_value});
    const onChangeDateHandler = (event) => {
        setFood({...food , date : event.target.value})
        // setDate(event.target.value);
    }
    const onChangeMealHandler = (event) => {
         setFood({...food , meal : event.target.value})
        // setMeal(event.target.value);
    }
    const onChangeContentHandler = (event) => {
         setFood({...food , content : event.target.value})
        // setContent(event.target.value);
    }
    const onChangeCalorieHandler = (event) => {
         setFood({...food , calorie : event.target.value})
        // setCalorie(event.target.value);
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(food);
        props.onFormSubmit(food);
        setFood(Default_value);
    };
    const onCancelHandler = () => {
        setFood(Default_value);
        props.onCancel();
    }
    return (
        <form  onSubmit={onSubmitHandler}>
            <label htmlFor="date">Date : </label>
            <input type="date" id="date" name="date" value={food.date} onChange={onChangeDateHandler}></input>
            <label htmlFor="meal">Meal :</label>
            <select id='meal' name="meal" value={food.meal} onChange={onChangeMealHandler}>
                <option value="BreakFast">BreakFast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snaks">Snaks</option>
            </select>
            <label htmlFor="content" >Content :</label>
            <input type="text" id='content' name="content" value={food.content} onChange={onChangeContentHandler}></input>
            <label htmlFor="calories">Calories :</label>
            <input className={`${styles.caloriesInput} ${food.calorie < 0 ? styles.error : ""}`}   type="number" id="calories" name="calories" value={food.calorie} onChange={onChangeCalorieHandler}></input>
            <div className={styles.footer}>
                <button>Add Recored</button>
                <button className={styles.secondry} type='button' onClick={onCancelHandler}>Cancel</button>
            </div>
        </form>
        
        
    )
}
export default CaloriesForm;