import React from "react";
import "../App.css";
import DeleteButton from "./DeleteButton";

const Tasklist = ({ trainings, onDelete }) => {
  return (
    <div>
      <div className="titles">
        <p className="info">Дата(ДД.MM.ГГ)</p>
        <p className="info">Пройдено км</p>
        <p className="info">Действия</p>
      </div>
      <div>
        <div className="training-wrapper">
          {trainings.map((el, index) => {
            return (
              <div className="training-item" key={el.id}>
                <p className="#">{el.date}</p>
                <p className="#">{el.km}</p>
                <div className="actions">
                  <button className="btn-edit">✏️</button>
                  <DeleteButton onClick={() => onDelete(el.id)} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tasklist;
