import React, {useState} from "react";
import { useDispatch } from 'react-redux'
import { search} from "../../appSlice";

export const TextFilters = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        e.preventDefault();
        const term = e.target.value
        setSearchTerm(term);
        dispatch(search(term));
    }

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search"
            />
        </div>
    )
}