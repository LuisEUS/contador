import { useState } from "react";


function App() {

  const [cuenta, setCuenta] = useState(0);

  const handleClic = () => {
    setCuenta(cuenta+1);
  }
  const handleMenosClic = () => {
      setCuenta(cuenta-1);
  }
    const handleResetClic = () => {
      setCuenta(cuenta - cuenta);
  };


  return (
    <div className="App">
      
        
        <h3>Contador</h3>
     
        <hr />
        <h2 className="text-center">{cuenta}</h2>
        <hr />
        <div style={{display: "flex", justifyContent: "flex-end", marginRight: "5px",}}>
          
          <button type="button" className="btn btn-primary" onClick={() => {
            handleClic()
            }}>+1</button>

            <button type="button" className="btn btn-primary mx-2" onClick={() => {
            handleMenosClic()
            }}>-1</button>
          
          <button type="button" className="btn btn-primary mx-2" onClick={() => {
            handleResetClic()
            }}>Reinicio</button>
          
        </div>
        
      
        
    </div>
  );
}

export default App;
