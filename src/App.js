import './asets/style/App.css';
import Pokemon from "./components/Pokemon";
import {Button} from "react-bootstrap";
import React, {useState} from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  const [show,setShow] = useState(true)

  function handleChange(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault()
    if (name.length > 1){
      setHeading(name);
      setShow(!show);
    }else {
      return Error("wpisz conamniej jeden znak")
    }
  }
  return (
    <>
      {
        show ?
          <div className="App">
            <div className="header__griding">
              <h3>Hello in poke App</h3>
              <h3>give me a nickname</h3>
              <input
                type='text'
                placeholder='min 2 characters'
                value={name}
                onChange={handleChange}
              />
              <Button
                className={'m-1'}
                variant="primary"
                onClick={handleClick}
              >
                Next Step
              </Button>
            </div>
          </div>
          :
          <Pokemon headingText={headingText}/>
      }
    </>
  );
}

export default App;
