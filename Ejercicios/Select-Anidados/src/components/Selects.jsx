import React, { useState, useEffect } from "react";
import { SelectList } from "./SelectsList";

export const Selects = () => {
  const [departamentoId, setDepartamentoId] = useState("");
  const [municipios, setMunicipios] = useState([]);
  const [municipioId, setMunicipioId] = useState("");
  const [info, setInfo] = useState(null);

  useEffect(() => {
    if (departamentoId) {

      const url = `https://api-colombia.com/api/v1/Department/${departamentoId}/cities`;
      console.log('Fetching municipios from URL:', url);
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then(data => {
          if (Array.isArray(data)) {
            setMunicipios(data);
          } else {
            console.error('Datos inválidos para municipios:', data);
          }
        })
        .catch(error => console.error('Error fetching municipalities:', error));
    } else {
      setMunicipios([]); 
    }
  }, [departamentoId]);


  useEffect(() => {
    if (municipioId) {
  
      const url = `https://api-colombia.com/api/v1/City/${municipioId}`;
      console.log('Fetching city info from URL:', url);
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then(data => {
          if (data) {
            setInfo(data);
          } else {
            console.error('Datos inválidos para la ciudad:', data);
          }
        })
        .catch(error => console.error('Error fetching city info:', error));
    } else {
      setInfo(null); 
    }
  }, [municipioId]);

  return (
    <div className="container">
      <SelectList
        title="Departamentos"
        url="https://api-colombia.com/api/v1/Department"
        manejadorCambio={(event) => {
          setDepartamentoId(event.target.value);
          setMunicipios([]); 
          setInfo(null); 
        }}
      />
      <br />
      <SelectList
        title="Municipios"
        url={`https://api-colombia.com/api/v1/Department/${departamentoId}/cities`}
        manejadorCambio={(event) => {
          setMunicipioId(event.target.value);
        }}
        data={municipios}
        value={municipioId}
      />
      <br />
      {info && (
        <div>
          <h3>Información del Municipio</h3>
          <p>Población: {info.population}</p>
          <p>Código Postal: {info.postal_code}</p>
          <p>Región: {info.region}</p>
        </div>
      )}
    </div>
  );
};
