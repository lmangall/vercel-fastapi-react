import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
const pingServer = async () => {
  const url = "/api/hello"; // Ensure this matches your FastAPI endpoint
  const options = { // Define the options object
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { name } = await response.json();
    setText(name);
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={pingServer}>who's the best</button>
        <p>{text}</p>
      </header>
    </div>
  );
}

export default App;
