import "./App.css";
import productData from "./data/data.json";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="grid-container">
      {productData.map(( item, i) => (
          <Card key={i} product={item} />
        )
      )}
    </div>
  );
}

export default App;
