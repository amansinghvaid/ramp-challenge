import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState("Loading...")
  let serverMsg = "this is message";
  let newMsg = "";
  let count = 0;
  const  timer = async () => {
    if (count < serverMsg.length) {
      newMsg = newMsg + serverMsg.charAt(count)
      await setMsg(newMsg);
      count++
      setTimeout(timer, 2000);
    }
  }
  const fetchData = async () => {
    try {
      const response = await fetch('https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/636f6e');
      const result = await response.text();
      serverMsg = result;
      timer();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {msg}
        </p>
      </header>
    </div>
  );
}

export default App;
