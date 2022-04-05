import { useState } from "react";

function App() {

  const [cuenta, setCuenta] = useState(0);
  const [paso, setPaso] = useState(0);

  const handleClic = () => {
    setCuenta(cuenta+paso);
  }
  const handleMenosClic = () => {
      setCuenta(cuenta-paso);
  }
    const handleResetClic = () => {
      setCuenta(cuenta - cuenta);
      setPaso(1);
  }
    const handleInputChange = (event) => {
      if (isNaN(event.target.value)){
        return;
      }
      setPaso(Number(event.target.value));
    }

  return (
    <div className="App">      
        
        <h3>Contador</h3>
     
        <hr />
        <h2 className="text-center">{cuenta}</h2>
        <hr />

        <div 
        style={{
        display: "flex", 
        justifyContent: "flex-end", 
        marginRight: "15px"
        
        }}>
          
        <label>
          Paso
          <input 
          id="paso"
          name="paso"
          type="text" 
          value={paso}
          onChange={handleInputChange} 
          style={{
            marginLeft: "15px", 
            width: "60px"
            }}/>
        </label>

          <button 
          type="button" 
          className="btn btn-primary" 
          onClick={handleClic}
          style={{marginLeft:"15px"}}
        >+1
        </button>

          <button 
          type="button" 
          className="btn btn-primary mx-2" 
          onClick={handleResetClic}
          style={{marginLeft:"15px"}}
        >Reinicio
        </button>

            <button 
            type="button" 
            className="btn btn-primary mx-2" 
            onClick={handleMenosClic}
            style={{marginLeft:"15px"}}
            >-1
            </button>
   
        </div>
        
    </div>
  );
}

export default App;
