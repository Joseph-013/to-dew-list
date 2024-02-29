function List(props) {

    // function _delete() {
    //     props.on
    // }

    // function _done() {

    // }

    return (
        <ul className="w-full h-full">
            {props.items.map((item) => (
                <li key={item.id} className='h-12 flex justify-between items-center w-full font-jetbrains-mono'>
                    <input type="checkbox" className="mr-2" checked={item.status} disabled />
                    <h6 className="flex-1 text-start">({item.quantity})&nbsp;{item.name}</h6>
                    <div>
                        <button className='px-2 py-1 border border-black rounded-md ml-4' onClick={() => props.onDelete(item.id)}>Delete</button>
                        <button className='px-2 py-1 border border-black rounded-md ml-2' onClick={() => props.onDone(item.id)}>Done</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default List
