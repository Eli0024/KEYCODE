import React from "react";
import { useForms } from "../hooks/useForms";
import { Loader } from './Loader';
import Mail from './Mail';

//Valores por defecto para el formulario
const valorDefecto = {
  nombre: "",
  email: "",
  asunto: "",
  observaciones: "",
};

//Validaciones para verificar el contenido y que tengan el formato correcto
const validaciones = (form) => {
  //Puede tener cualquier caracter alfanumerico + @ + cualquier letra + . + cualquier caracter minimo 2 maximo 6
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,6}$/;
  //Puede tener minimo 1 y maximo 255 caracteres
  let regexComments = /^.{1,255}$/;

  let errorsFormulario = {};

  //Validaciones de inputs vacios y sin el patron especificado
  if (!form.nombre.trim()) {
    errorsFormulario.nombre = "El campo es obligatorio";
  }
  if (!form.email.trim()) {
    errorsFormulario.email = "El campo es obligatorio";
  } else if (!regexEmail.test(form.email.trim())) {
    errorsFormulario.email =
      "El campo no tiene el formato de un correo electronico";
  }
  if (!form.asunto.trim()) {
    errorsFormulario.asunto = "El campo es obligatorio";
  }
  if (!form.observaciones.trim()) {
    errorsFormulario.observaciones = "El campo es obligatorio";
  } else if (!regexComments.test(form.observaciones.trim())) {
    errorsFormulario.observaciones =
      "El campo debe tener minimo 1 caracter y maximo 255 caracteres";
  }

  return errorsFormulario;
};

const ContactForm = () => {
  //Llamado a nuestro custom hook recibiendo mis variables y mis funciones
  const { form, errores, cargando, bd, respuesta, manejadorCambios, manejadorSalidaInput, enviarFormulario } = useForms(
    valorDefecto,
    validaciones
  );
  
  return (
    <>
    <div div className="contact-form-container">
      <h1>Formulario de contacto</h1>
      {/* con el evento onSubmit ejecutamos una funcion cuando se envia el formulario */}
      <form onSubmit={enviarFormulario} className="contact-form">
        {/* Nombre */}
        <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <br></br>
        <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
          type="text"
          name="nombre"
          placeholder="Escribe tu nombre..."
          // required
          value={form.nombre}
          onChange={manejadorCambios}
          onBlur={manejadorSalidaInput}
        />
        {/* Muestra la etiqueta p con el error solo si tiene un error en nombre */}
        {errores.nombre && <p className="p-error">{errores.nombre}</p>}
        </div>
        {/* Email */}
        <div className="mb-2 text-xl font-medium text-center">
          <label htmlFor="email">Email</label>
        <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="email"
          name="email"
          placeholder="Escribe tu correo electronico..."
          // required
          value={form.email}
          onChange={manejadorCambios}
          onBlur={manejadorSalidaInput}
        />
        {/* Muestra la etiqueta p con el error solo si tiene un error en email */}
        {errores.email && <p className="p-error">{errores.email}</p>}
        </div>
        {/* Asunto */}
        <div className="form-group">
          <label htmlFor="asunto">Asunto</label>
        <input
          type="text"
          name="asunto"
          placeholder="Asunto..."
          // required
          value={form.asunto}
          onChange={manejadorCambios}
          onBlur={manejadorSalidaInput}
        />
        {/* Muestra la etiqueta p con el error solo si tiene un error en asunto */}
        {errores.asunto && <p className="p-error">{errores.asunto}</p>}
        </div>
        {/* Observaciones */}
        <div className="form-group">
        <label htmlFor="observaciones">Observaciones</label>
        <textarea className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          name="observaciones"
          placeholder="Escribe tus observaciones..."
          // required
          cols={50}
          rows={5}
          value={form.observaciones}
          onChange={manejadorCambios}
          onBlur={manejadorSalidaInput}
        />
        {/* Muestra la etiqueta p con el error solo si tiene un error en observaciones */}
        {errores.observaciones && (
          <p className="p-error">{errores.observaciones}</p>
        )}
        </div>
        {/* Button que envia el formulario */}
        <div className="mb-2 text-xl font-bold text-center">
        <input type="submit" value="Enviar"  disabled={cargando} className={cargando ? 'deshabilitado' : ''} />
        </div>
      </form>
      {/* Si cargando es True renderiza <Loader/> */}
      {cargando && <Loader/>}
      {respuesta && <Mail datos={bd}/>}
      </div>
    </>
  );
};

export default ContactForm;