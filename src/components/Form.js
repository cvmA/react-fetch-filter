import React from 'react';
import './Form.css'
const Form = ( {setSelectedCountry},{setInputName}) => {
    return (
        <div className='form-container'>
        <select className='select-country' onChange={(event) => {
          setSelectedCountry(event.target.value)
        }}>
          <option selected disabled>Selecione um país</option>
          <option value='Brazil'>Brasil</option>
          <option value='Japan'>Japão</option>
          <option value='Turkey'>Turquia</option>
        </select>
        <input
          placeholder='Pesquise um nome...'
          className='input-search'
          type="text"
          onChange={(event) => {
            setInputName(event.target.value)
          }}
        />
        </div>
    );
}
 
export default Form;