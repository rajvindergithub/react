const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Hanky", quantity: 10, packed: false },
  { id: 4, description: "Paint", quantity: 4, packed: false },
  { id: 5, description: "Shirts", quantity: 4, packed: false },
  { id: 6, description: "Money", quantity: 5000, packed: false },
]; 



function App() {
   return (
       <>
        <Logo />
        <Form />
        <PackingList />
        <Stats />
       </>
   );
}


function Logo(){
    return(
        <>
            <h1>Far Away</h1>
        </>
    );
}


function Form(){
    
    function handleSubmit(e){
        alert('Submit');
        
        e.preventDefault(); 
        
    }
    
     return(
        <>
         <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip</h3>
            <select>
               {Array.from({length: 20}, (a, i) => i+1).map((num) => (
                    <option value={num} key={num}>Select : {num}</option>
                ))}
            </select>
            <input type="text" placeholder="Item ..." />
            <button>Add</button>
         </form>
         </>
    );
}


function PackingList(){
     return(
        <div className="list"> 
            <ul>
                {initialItems.map((item) =>  (
                    <Item item={item} key="{item.id}" />
                ))}
            </ul>
         </div>
    );
}


function Item({ item }){
    
const itemPacked = {textDecoration: "line-through"}
    
    return(
        <>
            <li>
                <span style={item.packed ? itemPacked : {}}>
                    {item.description}  {item.quantity}
                </span>
                <button >X</button>
            </li>
        </>
    );
}


function Stats(){
     return(
        <>
            <footer className="stats">
                You have X items on your listand you already packed x (X%)
            </footer>
         </>
    );
}

export default App;
