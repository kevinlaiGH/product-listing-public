import "./App.css";
import React, { useState } from 'react';
import productData from "./data/data.json";
import { Card } from "./components/Card";
import DropdownFilters from "./components/DropdownFilters";

function App() {
  const [products, setProducts] = useState(productData);

  const handleTypeFilterChange = (selectedType) => {
    if (selectedType) {
      const filtered = productData.filter((product) => product.type === selectedType);
      setProducts(filtered);
    } else {
      setProducts(productData);
    }
  };
  return (
      <>
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
