import "./index.css";

export const Card = ({ product }) => {
  const { productName, productImage, price } = product;
  return (
    <div className="grid-item">
        <div className="card">
            <div className="card-image">
                <img src={`https://loremflickr.com/320/240/${productImage}`} alt={productName} />
            </div>
            <div className="card-content">
                <h2>{productName}</h2>
                <p>{price}</p>
            </div>
        </div>
    </div>
  );
};
