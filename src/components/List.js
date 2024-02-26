// import Item from "./Item";
import { GroceryList } from "./GroceryList";

function deleteItem() {

}

function doneItem() {

}

function Item({ item }) {
    return (
        <li className='h-12 flex justify-between items-center w-full font-jetbrains-mono'>{item.title}
            <div>
                <button onClick={deleteItem(item.id)} className='px-3 py-1 border border-black rounded-md ml-4'>Remove</button>
                <button onClick={doneItem(item.id)} className='px-3 py-1 border border-black rounded-md ml-4'>Done</button>
            </div>
        </li>
    );
}

function List() {
    return (
        <ul className="w-full h-full">
            {GroceryList.map((item) => (
                <Item item={item} key={item.id} />
            ))}
        </ul>
    )
}

export default List
