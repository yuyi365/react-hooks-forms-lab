import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

const ShoppingList = ({ items, onItemFormSubmit }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  // search functions
  const itemsToDisplay = items.filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    )
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {onItemFormSubmit}/>
      <Filter 
      search={search}
      onCategoryChange={handleCategoryChange} 
      onSearchChange={setSearch}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
