// App.js
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null); // State to store the dog image
  const [isLoading, setIsLoading] = useState(true); // State for loading status

  useEffect(() => {
    // Fetch the random dog image
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); // Update state with the image URL
        setIsLoading(false); // Loading is complete
      })
      .catch((error) => console.error("Error fetching dog image:", error));
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
