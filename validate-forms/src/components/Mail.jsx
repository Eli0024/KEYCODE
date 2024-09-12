import React from "react";

/**
 * 
 * datos viene en una estructura por capas asi:
 * {
 *  datos: {
 *        nombre: '',
 *        asunto: '',
 *        ...
 *    }
 * }
 * 
 * Entonces para acceder, primero accedemos al segundo nivel del objeto = { datos } y despues
 * desestructuramos el ultimo nivel del objeto
 */

const Mail = ({ datos }) => {
  //Desestructuramos la informacion del form y le ponemos valores iniciales
  const { nombre = '', asunto = '', email = '', observaciones = '' } = datos

  return (
    <div className="relative p-6 bg-green-200 shadow-md rounded-lg">
    <div className="mb-4 border-b border-gray-200 pb-2">
      <h2 className="text-2xl  text-center font-semibold text-gray-800">{asunto}</h2>
      <p className="text-gray-600 mt-1 text-center">
        De:{" "}
        <span className="font-medium text-gray-800 text-center">
          {nombre} - ({email})
        </span>
      </p>
    </div>
    <div>
      <p className="text-gray-700 text-center">{observaciones}</p>
    </div>
  </div>
);
};

export default Mail;