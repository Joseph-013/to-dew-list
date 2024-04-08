import { useState } from "react";
import { quotes } from "./quotes.js";


function Form({ onAddItem, onClearLists }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);


    function handleSubmit(e) {
        e.preventDefault();
        if (!name) return;
        const newItem = { name, quantity, status: false, id: Date.now() };

        //Reset Fields
        setName("");
        setQuantity(1);
        onAddItem(newItem);
    }

    function handleClearLists() {
        const response = window.confirm('Clear all lists?');
        if (response) {
            onClearLists();
        }
    }



    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        return randomQuote;
    }

    return (
        <form onSubmit={handleSubmit} className='h-full my-5 flex flex-col flex-1'>
            <h1 className='font-micro5 text-7xl w-full text-center'><span className='text-5xl sm:text-7xl'>--- Meh Grozzeri Lisst ---</span></h1>
            <div className='flex flex-row items-center justify-center'>
                <select
                    value={quantity}
                    onChange={e => setQuantity(+e.target.value)}
                    className='mr-3 border border-black rounded-md'>
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                        <option value={num} key={num}>{num}</option>
                    ))}
                </select>
                <div className='flex flex-row'>
                    <label htmlFor="itemText" className='font-jetbrains-mono flex items-center mr-3'>Item: </label>
                    <input
                        value={name}
                        placeholder="Add Item..."
                        id='itemText'
                        className='rounded-md border border-black h-10 w-80 p-3 font-jetbrains-mono'
                        type="text"
                        name='item'
                        maxLength={25}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
            </div>
            <div className='mt-3 flex flex-row justify-center'>
                <button type="submit" className='font-jetbrains-mono rounded-md px-4 py-1 bg-sky-500 text-white'>Add</button>
                <div className="w-3"></div>
                <button onClick={handleClearLists} className='font-jetbrains-mono bg-red-500 text-white rounded-md px-4 py-1'>Clear</button>
            </div>

            <div className="mt-4 mx-6 italic text-sm text-slate-500">{getRandomQuote().quote}<br />- {getRandomQuote().author}</div>
            {/* <div className="mt-2 italic text-sm"></div> */}
        </form>
    )
}

export default Form
