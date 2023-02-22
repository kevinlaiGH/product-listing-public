import React, { useState } from 'react';
import "./index.css";

const DropdownFilters = ({ types, onTypeFilterChange }) => {
    const [selectedType, setSelectedType] = useState('');

    const handleTypeChange = (event) => {
        const selectedType = event.target.value;
        setSelectedType(selectedType);
        onTypeFilterChange(selectedType);
    };

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