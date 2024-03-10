 
import './App.css';
import { useState } from 'react';

const questions = [
    {id: 1, 
    question: "question no 1 Hello how are you",
    answer: "answer one"},
     {id: 2, 
    question: "question no 2 Hello how are you",
    answer: "answer two"},
     {id: 3, 
    question: "question no 3 Hello how are you",
    answer: "answer three"},
     {id: 4, 
    question: "question no 4 Hello how are you",
    answer: "answer four"},
     {id: 5, 
    question: "question no five Hello how are you",
    answer: "answer five"},
     {id: 6, 
    question: "question no 6 Hello how are you",
    answer: "answer six"}
];


function App() {
  return (
     <>
        <div className="App">
            <FlashCards />
        </div>
      </>
  );
}


function FlashCards(){
    
    const [selectedId, setSelectedId] = useState(2);
    
    function showAnswer(id){
        console.log(id);
        setSelectedId(id);
    }
    
    return (
        <>
            <div className="flashcards">
                {questions.map( question => (
                    <div key={question.id}  onClick={() => showAnswer(question.id)} className={question.id === selectedId ? "selected" : "" }>
                        <p>
                            {question.id === selectedId ? question.answer : question.question}
                        </p>
                    </div>
                 ))}
        
            </div>
        </>
    );
}

export default App;
