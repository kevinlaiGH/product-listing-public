import React, {useMemo, useState} from 'react';
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {productFilter} from "../../appSlice";

const DropdownFilters = () => {
    const [selectedType, setSelectedType] = useState('');
    const allProducts = useSelector((state) => state.app.allProducts)
    const dispatch = useDispatch()

    const handleTypeChange = (event) => {
        const selectedType = event.target.value;
        setSelectedType(selectedType);
        dispatch(productFilter(selectedType));
    };
    const [types] = useMemo(() => {
        const types = [...new Set(allProducts.map(p => p.type))]
        return [types]
    },[allProducts])

    return (
        <div className="dropdown-filters">
            <label className="dropdown-filters-label" htmlFor="product-type-filter">Filter by:</label>
            <select id="product-type-filter" value={selectedType} onChange={handleTypeChange}>
                <option value="">All</option>
                {types.map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DropdownFilters;