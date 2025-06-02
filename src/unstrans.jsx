import { useState, useTransition } from "react";


const SearchComponent = ({items}) => {
    const [input, setInput] = useState('');
    const [filteredItems, setFilteredItems] = useState(items);
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);

        // Start a transition for filtering (non-urgent)
        startTransition(() => {
            const results = items.filter(item => item.toLowerCase().includes(value.toLowerCase()));
            setFilteredItems(results);
        });
    };

    return (
        <div>
            <p>Use Transition</p>
            <input value={input} onChange={handleChange} placeholder="Search..." />
            {isPending && <span>Loading...</span>}
            <ul>
                {filteredItems.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    )
}


export default SearchComponent;