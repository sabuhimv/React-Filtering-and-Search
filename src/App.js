import { useState } from "react";
import "./App.css";
import Nav from "./Navivation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Slidebar/Sidebar";

// DATABASE
import products from "./db/data";
import Card from "./components/Card";

function App() {
  // ------------------------   INPUT FILTER   ------------------------

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==-1
  );

  // ------------------------   RADIO FILTER   ------------------------

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------------------   BUTTON FILTER   ------------------------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------------------------------------------

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    // SELECTED FILTER
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filteredData(products,selectedCategory,query);

  return (
    <div className="App">
      <Sidebar  handleChange={handleChange}/>
      <Nav  query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result} />
    </div>
  );
}

export default App;
