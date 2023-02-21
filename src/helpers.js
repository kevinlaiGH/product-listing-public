import productData from "./data/data.json";

const extractProductData = productData.map((data, i) => (
  <div key={i}>
    <div>{data.productName}</div>
  </div>
));

export { extractProductData };
