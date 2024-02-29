import { useState } from "react";

function Form({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);


    function handleSubmit(e) {
        e.preventDefault();
        if (!name) return;
        const newItem = { name, quantity, isChecked: false, id: Date.now() };
        console.log(newItem);

        //Reset Fields
        setName("");
        setQuantity(1);
        onAddItem(newItem);
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
            <div className='mt-3'>
                <button type="submit" className='font-jetbrains-mono border border-black rounded-md px-4 py-1'>Add</button>
            </div>
        </form>
    )
}

export default Form
