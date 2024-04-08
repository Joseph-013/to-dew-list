function List(props) {
    const tailwindTextColors = [
        "bg-violet-400",
        "bg-red-400",
        "bg-green-400",
        "bg-orange-400",
        "bg-yellow-400",
        "bg-blue-400",
        "bg-amber-400",
        "bg-lime-400",
        "bg-emerald-400",
        "bg-cyan-400",
        "bg-violet-400",
        "bg-fuchsia-400",
        "bg-pink-400",
        "bg-rose-400",
    ];

    function randomColor() {
        const randomIndex = Math.floor(Math.random() * tailwindTextColors.length);
        return tailwindTextColors[randomIndex];
    }

    return (
        <ul className="w-full h-full space-y-4 mt-4 px-4">
            {props.items.map(function (item) {
                return (
                    <li key={item.id} className={`h-12 flex justify-between items-center w-full font-jetbrains-mono px-4 rounded-full ${item.status === false ? randomColor() : 'bg-slate-300'} `}>
                        <input type="checkbox" className="mr-2 size-5" checked={item.status} disabled />
                        <h6 className="flex-1 text-start"><span className={`${item.status && 'line-through'}`}>({item.quantity})&nbsp;{item.name}</span></h6>
                        <div>
                            <button className='px-2 py-1 border border-black rounded-md ml-4' onClick={() => props.onDelete(item)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                </svg>
                            </button>
                            {(!item.status)
                                ? <button className='px-2 py-1 border border-black rounded-md ml-2' onClick={() => props.onDone(item)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                                    </svg>
                                </button>
                                : ''}
                        </div>
                    </li>
                );
            })}
        </ul >
    )
}

export default List
