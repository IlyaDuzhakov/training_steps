import React from "react";
import { useState } from "react";

const Form = ({ trainings, setTrainings }) => {
  const [inputDate, setInputDate] = useState("");
  const [inputKm, setInputKm] = useState("");

  const addTraining = (e) => {
    e.preventDefault();
    for (let i = 0; i < trainings.length; i += 1) {
      if (trainings[i].date === inputDate) {
        trainings[i].km = Number(trainings[i].km) + Number(inputKm);
        const updated = [...trainings];

        
        updated.sort((a, b) => {
          const [da, ma, ya] = a.date.split(".");
          const [db, mb, yb] = b.date.split(".");
          return new Date(`${yb}-${mb}-${db}`) - new Date(`${ya}-${ma}-${da}`);
        });
        setTrainings(updated);
        setInputDate("");
        setInputKm("");
        return;
      }
    }
    const newTraining = {
      date: inputDate,
      km: inputKm,
      id: Date.now(),
    };
    const updated = [...trainings, newTraining];

    updated.sort((a, b) => {
      const [da, ma, ya] = a.date.split(".");
      const [db, mb, yb] = b.date.split(".");
      return new Date(`${yb}-${mb}-${db}`) - new Date(`${ya}-${ma}-${da}`);
    });
    setTrainings(updated);
    setInputDate("");
    setInputKm("");
  };

  return (
    <form className="wrapper">
      <div>
        <p className="info">Дата (ДД.MM.ГГ)</p>
        <input
          className="input-date"
          type="text"
          value={inputDate}
          onChange={(event) => {
            setInputDate(event.target.value);
          }}
        />
      </div>
      <div>
        <p className="info">Пройдено км</p>
        <input
          className="input-km"
          type="text"
          value={inputKm}
          onChange={(event) => {
            setInputKm(event.target.value);
          }}
        />
        <button
          className="btn-ok"
          onClick={(e) => {
            addTraining(e);
          }}
        >
          ОК
        </button>
      </div>
    </form>
  );
};

export default Form;
