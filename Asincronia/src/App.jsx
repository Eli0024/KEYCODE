import { useState } from "react";
import "./App.css";

function App() {

  // //Promise
  // const promesa = new Promise((resolve, reject) => {
  //   const exito = false;

  //   if (exito) {
  //     resolve("Todo bien");
  //   } else {
  //     reject("F en el chat");
  //   }
  // });

  // promesa
  //   .then((resultado) => console.log(resultado))
  //   .catch((error) => console.log(error));


  // Async Await
   const obtenerDatos = async () => {
     try {
       const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/1")
       const data = await respuesta.json()
       console.log(data)
     } catch (error) {
       console.log('Again F en el chat')
     }
   }

  // async function obtenerDatos () {
  //   try {
  //     const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     console.log( respuesta);
  // } catch (err) {
  //   console.log(err);
  // }
  // }

  return (
    <>
      <h1>Programacion asincrona</h1>
      <caption>Promesas</caption>
      <p>En consola</p>
      <hr />
      <caption>Async / Await</caption>
      <button onClick={obtenerDatos}>
        Consumir API
      </button>
    </>
  );
}

export default App;