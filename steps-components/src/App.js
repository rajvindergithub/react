import { useState } from "react";  



const colorButtonBlue = {backgroundColor: '#7950f2', color: '#FFF'}; 

const messages = ["Learn React", "Apply for Jobs", "Invest your new income"]; 



 function App(){
     
     const [step, setStep] = useState(1);
   
     function handlePrevious(){
         
         if(step >1){
             setStep(step - 1);
         }else{
             alert('First');
         }
          
     }
     
      function handleNext(){
          if(step < 3){
              setStep(step + 1);
          }else{
              alert('Last Click');
          }
         
         
     }
     
     return (
        <>
            <div className="steps">
                <div className="numbers">
                    <div className={step >= 1 ? "active":""}>1</div>
                    <div className={step >= 2 ? "active":""}>2</div>
                    <div className={step >= 3 ? "active":""}>3</div>
                </div>
         
                <p className="message">{step} : {messages[step- 1]}</p>
                    
                <div className="buttons">
                    <button style={colorButtonBlue} onClick={handlePrevious}>Previous</button>
                    <button style={colorButtonBlue} onClick={handleNext}>Next</button>
                </div>
            </div>
         </>
     );
 }

export default App; 