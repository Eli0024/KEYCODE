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
  const { nombre = '', asunto = '', email = '', observaciones = '' } = datos;

  return (
    <div className="relative p-6 bg-white shadow-lg rounded-lg border border-gray-300 transition-transform transform hover:scale-105">
      <div className="mb-4 border-b border-gray-200 pb-2">
        <h2 className="text-2xl text-center font-bold text-green-700">{asunto}</h2>
        <p className="text-gray-600 mt-1 text-center">
          De:{" "}
          <span className="font-semibold text-gray-800">
            {nombre} - <span className="text-green-600">{email}</span>
          </span>
        </p>
      </div>
      <div>
        <p className="text-gray-700 text-center italic">{observaciones}</p>
      </div>
    </div>
  );
};

export default Mail;
