import { useState } from "react";
type SetCategories = {onNewCategory: (category: string) => void};
export const AddCategory = ({ onNewCategory }: SetCategories) => {
  // useState
  const [inputValue, setInputValue] = useState('Valor inicial');

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanValue = inputValue.trim();
    if (cleanValue.length <= 1) return;
    onNewCategory(cleanValue);
    setInputValue('');
  }

  return (
      <form onSubmit={ onSubmit }>
        <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue} 
        onChange={ onInputChange }
        />
      </form>
  );
}
