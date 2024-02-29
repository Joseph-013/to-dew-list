import './App.css';
import List from './components/List.js';
import Form from './components/Form.js';
import { useState } from 'react';

function App() {

    const [items, setItems] = useState([]);

    function handleAddItem(item) {
        setItems(items => [...items, item]);
        console.log(items);
    }

    function handleDelete(e) {

    }
    
    function handleDone(e) {
        console.log("Done "+e)
        let _item = items.find(i => i.id === e)
        _item.status = false;
        
    }
    
    function handleCheckToggle(e) {
        
    }

    return (
        <div className="App flex justify-center items-center h-screen w-screen">
            <div className='max-w-5xl h-screen bg-white flex flex-col justify-center items-center'>
                    <Form onAddItem = {handleAddItem}/>
                <div className='flex flex-1 flex-col justify-center items-center'>
                    <List 
                        items = {items} 
                        onDelete = {handleDelete}
                        onDone = {handleDone}
                    />   
                </div>
            </div>
        </div>
    );
}


export default App;
