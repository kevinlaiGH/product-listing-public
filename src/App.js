import "./App.css";
import React, { useState } from 'react';
import productData from "./data/data.json";
import { Card } from "./components/Card";
import DropdownFilters from "./components/DropdownFilters";
import {TextFilters} from "./components/TextFilters";
import { useSelector } from 'react-redux';

function App() {
    const products = useSelector((state) => state.app.products);
  // const handleTypeFilterChange = (selectedType) => {
  //   if (selectedType) {
  //     const filtered = productData.filter((product) => product.type === selectedType);
  //     dispatch(productFilter(filtered));
  //   } else {
  //     setProducts(productData);
  //   }
  // };


  return (
      <>
        <h1>product listing</h1>
          <TextFilters />
        <DropdownFilters />
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
