import { useState } from "react";
//TODO:
function App() {
  const [cuenta, setCuenta] = useState(0);

  const handleClic = () => {
    setCuenta(cuenta + 1);
  };

  return (
    <div className="App">
      <h3>Contador</h3>
      <hr />
      <h2 className="text-center">{cuenta}</h2>
      <hr />
      <div style={{
      display: "flex", 
      justifyContent: "flex-end", 
      marginRight:"5px",
      }}
      >
            <button type="button" 
        className="btn btn-primary" 
        onClick={handleClic}>+1
        </button>
      </div>
    </div>
  );
}

export default App;
