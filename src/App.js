import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import stadiums from "./components/stadium"

function App() {

  const baseUrl = "http://localhost:8083"

  const [stadiums, setStadiums] = useState([]);

  useEffect(() => {
    getStadiums();
  }, [])  // [] 리액트 열렸을 때 한번만 실행하는 게 하는 것!

  async function getStadiums(){
    await axios             // 다 받을 때까지 기다리는 것
      .get(baseUrl + "/reviews")   
      .then((res) => {
        console.log("res.data: ", res.data)
        setStadiums(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    <div className="App">
      <h1>stadium List</h1>
      {
      stadiums 
      ? stadiums.map(stadium => {
        return (
          <div className='stadium' key={stadium.id}>
            <label>
              {stadium.id} &nbsp;
              {stadium.content} &nbsp;
              {stadium.matchNumber} &nbsp;
              {stadium.memberName}

            </label>
            </div>
        )
      })
      : null
    }
    </div>
  );
}

export default App;
