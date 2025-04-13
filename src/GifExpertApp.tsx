import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Marvel']);
  const handleAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory])
  };
  return (
    <>
    {/* Titulo */}
      <h1>Gif expert App</h1>
    {/* Listado de items */}
    <AddCategory 
      onNewCategory={ handleAddCategory }
    />
    { 
      categories.map( (category: string) => 
      <GifGrid key={ category } category={ category } />
      )
    }

    </>
  )
}
