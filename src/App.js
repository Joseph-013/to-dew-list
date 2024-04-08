import './App.css';
import List from './components/List.js';
import Form from './components/Form.js';
import { useState, useEffect } from 'react';

/*
items:
    items.name
    items.quantity
    items.status: boolean
*/

function App() {

    const [items, setItems] = useState([]);
    const [doneItems, setDoneItems] = useState([]);
    let sortType = 'alpha'; //'alpha' 'count' 'strlen'

    let progress=(doneItems.length/(items.length+doneItems.length)*100).toFixed(2);    

    function handleAddItem(item) {
        setItems(items => [...items, item]);
        handleSort(sortType);
    }

    function handleDelete(param) {
        if(param.status)
            setDoneItems(items => items.filter(item => item.id!==param.id));
        else
            setItems(items => items.filter(item => item.id!==param.id));
    }
    
    function handleDone(param) {
        handleDelete(param);
        param.status = true;
        setDoneItems(doneItems => [...doneItems, param]);
        // handleSort(sortType);
    }

    function handleClearLists() {
        setItems([]);
        setDoneItems([]);
    }

    function handleSort(e) {
        const sortType = e;
        switch (sortType) {
            case 'count': {
                setItems(items => {
                    const newItems = [...items]; // ...items uses the CONTENT of items, not items ITSELF
                    const sortedItems = newItems.sort((a, b) => a.quantity - b.quantity);
                    return sortedItems;
                });
                break;
            }
            case 'strlen': {
                setItems(items => {
                    const newItems = [...items];
                    const sortedItems = newItems.sort((a, b) => a.name.length - b.name.length);
                    return sortedItems;
                });
                break;
            }            
            default: { // alpha
                setItems(items => {
                    const newItems = [...items];
                    const sortedItems = newItems.sort((a, b) => a.name.localeCompare(b.name));
                    return sortedItems;
                });
                break;
            }
        }
    }
    
    function setSortType(e) {
        handleSort(e);
    }

    return (
        <div className="App flex justify-center items-center h-screen w-screen font-jetbrains-mono">
            <div className='max-w-5xl h-screen bg-white flex flex-col justify-center items-center'>
                    <Form onAddItem = {handleAddItem} onClearLists={handleClearLists}/>
                <div className='flex flex-1 flex-col justify-center items-center w-full'>
                    <div className='flex'>
                        Sort:
                        {/* <select className='mr-3' onChange={(e)=>handleSort(e.target.value)}> */}
                        <select className='mr-3' onChange={(e)=>setSortType(e.target.value)}>
                            <option value="alpha" defaultValue>Alphabetic</option>
                            <option value="count">Item Count</option>
                            <option value="strlen">Length</option>
                        </select>
                        Ongoing:<br />
                    </div>
                    
                    <List 
                        items = {items} 
                        onDelete = {handleDelete}
                        onDone = {handleDone}
                    />
                </div>
                <div className='flex flex-1 flex-col justify-center items-center w-full'>
                    Done ({isNaN(progress)?'0':progress}%):<br />
                    <List 
                        items = {doneItems} 
                        onDelete = {handleDelete}
                        onDone = {handleDone}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
