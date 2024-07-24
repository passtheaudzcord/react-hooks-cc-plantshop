import React, { useState } from "react";

// Search function 
//pass down cb functions as props
function Search({ searchPlant }) {
  const [form, setForm] = useState('');

  //function for handleChange
  function handleChange(e) {
    setForm(e.target.value);
  }

  //function for handleSubmit
  function handleSubmit(e) {
    e.preventDefault();
    searchPlant(form);
  }

  // add onSubmit
  // add onChange event & value
  return (
    <div className="searchbar">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="search">Search Plants:</label>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          value={form.name}
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
}

export default Search;