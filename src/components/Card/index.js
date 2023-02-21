import "./index.css";

export const Card = ({ product }) => {
  const { productName, productImage, price } = product;
  return (
    <div className="grid-item">
      {productImage}
      {productName}
      {price}
    </div>
  );
};
