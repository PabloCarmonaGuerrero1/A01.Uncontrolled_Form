import React, { Fragment, useRef, useState } from "react";

const Formnocontrolado = () => {
  const [mensaje, setMensaje] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const datos = new FormData(formulario.current);
    const objetoDatos = Object.fromEntries([...datos.entries()]);
    console.log(objetoDatos);

    const { nombre_tarea, Descripcion, Estado } = objetoDatos;

    const errorMensaje =
      !nombre_tarea.trim()
        ? "Error falta nombre"
        : !Descripcion.trim()
        ? "Error falta descripción"
        : Estado === "pendiente"
        ? "Error estado pendiente"
        : "Todo correcto";

    setMensaje(errorMensaje);
    console.log("Enviando datos");
  };

  const formulario = useRef();

  return (
    <Fragment>
      <form onSubmit={handleSubmit} ref={formulario}>
        <input
          name="nombre_tarea"
          placeholder="Nombre de la tarea"
          type="text"
          className="form-control mb-2"
          defaultValue="Tarea 1"
        />
        <textarea
          name="Descripcion"
          placeholder="Introduce la descripcion de la tarea"
          className="form-control mb-2"
          defaultValue="Descripcion de la tarea"
        />
        <select
          name="Estado"
          className="form-control mb-2"
          defaultValue="Pendiente"
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <button type="submit" className="btn btn-primary">
          Añadir
        </button>
        <p>{mensaje}</p>
      </form>
    </Fragment>
  );
};

export default Formnocontrolado;
