// create your App component here
import React, { useState, useEffect } from "react"; 

function App() {

    const [dogs, setDogs] = useState('')

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setDogs(data.message);
        });
    }, []); 


    return (
        <div>
            {dogs === "" ? (
        <p>Loading...</p>
      ) : (
        <img src={dogs} alt="A Random Dog" />
      )}
        </div>
    )
}
export default App