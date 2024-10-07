import { useState, useEffect } from "react";

const User = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  const obtenerUsuarios = async () => {
   try {
      const respuesta = await fetch(
         "https://jsonplaceholder.typicode.com/users"
       );
        console.log(respuesta)
       const data = await respuesta.json()
        console.log(data)
       setUsuarios(data)
       setCargando(false)
     } catch (error) {
        console.error("Hubo un error");
      }
   };

  // async function obtenerUsuarios () {
  //   try {
  //     const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
  //     console.log( respuesta);
  //     const data = await respuesta.json();
  //     console.log(data);
  //     setUsuarios(data);
  //     setCargando(false);
  // } catch (err) {
  //   console.log(err);
  // }
  // }

  useEffect(() => {
    obtenerUsuarios()
  }, [])

  if (cargando) {
    return <p>Cargando...</p>
  } else {
      return (
        <div>
          <h1>Lista de usuarios</h1>
           <ul>
            {usuarios.map((usuario) => (
              <li>{usuario.name}</li>
            ))}
          </ul> 
        </div>
      );
  }

};

export default User;