import React from "react";
import { useFetch } from "../hooks/useFetch";

export const SelectList = ({ manejadorCambio, title, url, data, value }) => {
  const key = `select-${title}`;
  const label = title.toUpperCase();

  // Usar el hook useFetch para obtener los datos si no se pasan como props
  const { data: fetchedData, error, loading } = useFetch(url);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Ha ocurrido un error: {error.message}</p>;

  // Usar data si se pasa, de lo contrario usar fetchedData
  const options = data || fetchedData || [];

  return (
    <div className="container-select">
      <label className="label-select" htmlFor={key}>
        {label}
      </label>
      <select name={key} id={key} onChange={manejadorCambio} value={value}>
        <option value="">Seleccione un {title}</option>
        {options.map(option => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
