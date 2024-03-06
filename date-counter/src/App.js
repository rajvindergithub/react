import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <Counter />
    </div>
  );
}

function Counter(){
    
    const [count, setCount] = useState(0);
    
    const date = new Date("march 03 2024");
    date.setDate(date.getDate() + count);
    
    return(
        <>
            <div className="step">
                <button onClick={() => setCount((c) => c - 1)}>-</button>
                <div>Step : {count}</div>    
                 <button onClick={() => setCount((c) => c + 1)}>+</button>
            </div>
            <div className="count">
                <button>-</button>
                <div>Count : 5</div>    
                <button>+</button>
            </div>
            <div className="stepResult">
                <span>{count === 0 ? "Today is" : count > 0 ? `${count} days from today is` : `${count} days ago was`}</span>
              <span> {date.toDateString()}  </span>
            </div>
        </>
    );
}




export default App;
