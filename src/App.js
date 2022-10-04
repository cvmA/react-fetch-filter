import { useEffect, useState } from 'react';
import './App.css';

const apiURL = 'http://universities.hipolabs.com/search?name='

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [inputName, setInputName] = useState('')
  const [universities, setUniversities] = useState([])

  useEffect(() => {
    if (selectedCountry) {
      fetch(apiURL + inputName + '&country=' + selectedCountry)
        .then((response) => {
          response.json().then((list) => {
            setUniversities(list)
          })
        })

    }
  }, [selectedCountry, inputName])

  return (
    <>
    <div className='universities-title-container'>
      <h1>
        {selectedCountry 
          ? `Universidades em ${selectedCountry}`
          : 'Escolha um país'
        }
      </h1>
      </div>
      <div className='form-container'>
      <select className='select-country' onChange={(event) => {
        setSelectedCountry(event.target.value)
      }}>
        <option selected disabled>Selecione um país</option>
        <option value='Brazil'>Brasil</option>
        <option value='Japan'>Japão</option>
      </select>
      <input
        placeholder='Pesquise um nome...'
        className='input-search'
        type="text"
        onChange={(event) => {
          setInputName(event.target.value)
          console.log(inputName)
        }}
      />
      </div>
      <div className='cards-container'>
        {universities.map(({ name, country, web_pages }) => (
          <div className='card'>
          <h2>{name}</h2>
          <p>País: {country}</p>
          {web_pages.map((page) => (
          <a href={page} target="_blank">Página web</a>
          ))}
        </div>
      ))}
      </div>
    </>
  )
}

export default App;
