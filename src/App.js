import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';

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
      <Title selectedCountry={selectedCountry} />
      </div>
      <Form setSelectedCountry={setSelectedCountry}
            setInputName={setInputName}
            />
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
