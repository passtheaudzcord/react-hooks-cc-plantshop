import React, { useState } from "react";
 
function NewPlantForm({ addPlant }) {
const [form, setForm] = useState ({
  name: "",
  image: "",
  price: 0
})

//HandleChange
const handleChange = (e) => {
  setForm({
    ...form, 
    [e.target.name]: e.target.value
  })
}

//HandleSubmit
// POST request for form 
const handleSubmit = (e) => {
  e.preventDefault()
  //POST
  fetch('http://localhost:6001/plants', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(form)
  })
  .then(res => {
    if(res.ok){
      return res.json()
    } else {
      throw Error('post went wrong')
    }
  })
  //invokePlant
  .then(data => {
    addPlant(data)
    setForm({
      name: '',
      image: '', 
      price: 0
    })
  })
  .catch(err => console.error('couldnt reach server'))
}



// add onSubmit event to form 
// add value and onChange event to input elements
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit= {e => handleSubmit(e)}>
        <input type="text" name="name" placeholder="Plant name" value={form.name} onChange={(e) => handleChange(e)} />
        <input type="text" name="image" placeholder="Image URL" value={form.image} onChange={(e) => handleChange(e)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={form.price} onChange={(e) => handleChange(e)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
