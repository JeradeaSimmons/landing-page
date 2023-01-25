import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p>
        Hello my name is JD Simmons,
       </p>
     </header>
    </div>
  );
}
function Hello(props) {
  return <h1>Hello World!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello />);

export default App;
