import React, {useState} from "react";
import productData from "../../data/data.json";

export const TextFilters = ({setProducts}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        const term = e.target.value
        setSearchTerm(term);
        const filtered = productData.filter((product) => product.productName.toLowerCase().includes(term.toLowerCase()));
        setProducts(filtered);
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