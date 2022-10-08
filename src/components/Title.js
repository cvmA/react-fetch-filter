import React from 'react';
const Title = ({ selectedCountry }) => {
    return (
        <h1>
        {selectedCountry 
          ? `Universidades em ${selectedCountry}`
          : 'Escolha um país'
        }
      </h1>
    );
}
 
export default Title;