import React from "react";
import "./styles.css";

const { useState, useEffect } = React;

const App = () => {
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
      console.log("load");
    }, 1000);
  }, []);

  return (
    <div>
      {isLoaded ? (
        <div>
          <p>Cantidad de {count} clicks</p>
          <button onClick={() => setCount(count + 1)}>Clikeame</button>
        </div>
      ) : (
        "cargando..."
      )}
    </div>
  );
};

export default App;
