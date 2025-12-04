import { useState } from "react";
import "./App.css";
import Tasklist from "./components/Tasklist";
import Form from "./components/Form";

function App() {
  const [trainings, setTrainings] = useState([
    { date: "20.07.2019", km: "5.7", id: 1 },
    { date: "19.07.2019", km: "14.2", id: 2 },
    { date: "18.07.2019", km: "3.4", id: 3 },
  ]);

 const handleDelete = (id) => {
    setTrainings(prev => prev.filter(item => item.id !== id));
  };


  return (
    <div className="App">
       <Form trainings={trainings} setTrainings={setTrainings} />
      <Tasklist trainings={trainings} onDelete={handleDelete} />
    </div>
  );
}

export default App;
