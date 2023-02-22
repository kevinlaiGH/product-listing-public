import "./App.css";
import React, { useState } from 'react';
import productData from "./data/data.json";
import { Card } from "./components/Card";
import DropdownFilters from "./components/DropdownFilters";

function App() {
  const [products, setProducts] = useState(productData);
    const [searchTerm, setSearchTerm] = useState('');

  const handleTypeFilterChange = (selectedType) => {
    if (selectedType) {
      const filtered = productData.filter((product) => product.type === selectedType);
      setProducts(filtered);
    } else {
      setProducts(productData);
    }
  };

  const handleSearch = (e) => {
      e.preventDefault();
      const term = e.target.value
      setSearchTerm(term);
      const filtered = productData.filter((product) => product.productName.toLowerCase().includes(term.toLowerCase()));
      setProducts(filtered);
  }
    // <ul>
    //     {filteredItems.map(item => (
    //         <li key={item}>{item}</li>
    //     ))}
    // </ul>
  return (
      <>
        <h1>product listing</h1>
        <div>
          <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search"
          />
        </div>
        <DropdownFilters types={[...new Set(productData.map(p => p.type))]} onTypeFilterChange={handleTypeFilterChange}/>
        <div className="grid-container">
          {products.map(( item, i) => (
                  <Card key={i} product={item} />
              )
          )}
        </div>
      </>
  );
}

export default App;
