import { useState } from 'react';
import './App.css'
import CaloriesForm from './components/CaloriesForm.jsx';
// import CalorieRecored from './components/calorieRecored.jsx';
import ListingRecord from './components/ListingRecord.jsx';
import Modal from 'react-modal'
import styles from './components/CaloriesRecordForm.module.css'
function App() {
  const [modal, setModal] = useState(false);
  const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      buttom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      padding: '0px',
      borderRadius: '10px',
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
  };
  const openModal = () => {
    setModal(true);
  }
  const closeModal = () => { 
    setModal(false);
  }
  const INITIAL_RECORDS = [
    // {
    //   id:1 ,
    //   date: new Date(2024, 2, 14),
    //   meal: "Brakfast",
    //   content: "Eggs",
    //   calorie: -200,
    // }, {
    //   id:2 ,
    //   date: new Date(2024, 3, 15),
    //   meal: "Lunch",
    //   content: "chicken",
    //   calorie: 400,
    // }, {
    //   id: 3,
    //   date: new Date(2024, 4, 16),
    //   meal: "Dinner",
    //   content: "Kofta",
    //   calorie: 600,
    // }, {
    //   id: 4,
    //   date: new Date(2024, 5, 17),
    //   meal: "snaks",
    //   content: "chocolate",
    //   calorie: 500,
    // }
  ];
  const [records, setRecords] = useState(INITIAL_RECORDS);
  const [nextId, setNextId] = useState(5);
  const fromSubmitHandler = (record) => {
    console.log(record);
    const formattedRecord = {
      ...record,
      date: new Date(record.date),
      id : nextId,
    }
    setNextId(lastVal => lastVal + 1);
    setRecords([formattedRecord, ...records])
    closeModal();
    };
  return (
    
    <div>
      <h1 className={styles.title}>Calorie Tracker</h1>
      <Modal
        style={modalStyle}
        isOpen={modal}
        onRequestClose={closeModal}
      contentLabel='Modal'>
        <CaloriesForm onFormSubmit={fromSubmitHandler} onCancel={ closeModal} />
      </Modal>
      <ListingRecord allRecords={records} />
      <button className={styles.tracker} onClick={openModal}>Track Calorie</button>
    </div>
  );
}

export default App
