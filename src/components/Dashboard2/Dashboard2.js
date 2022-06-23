import React from 'react';
import { useFormik } from 'formik';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.nomarchivo) {
    errors.nomarchivo = 'Debe completar este cámpo';
  }

  if (!values.marca) {
    errors.marca = 'Debe completar este cámpo';
  }

  if (!values.modelo) {
    errors.modelo = 'Debe completar este cámpo';
  }
  if (!values.precio) {
    errors.precio = 'Debe completar este cámpo';
  }
  if (!values.ano) {
    errors.ano = 'Debe completar este cámpo';
  }
  if (!values.descripcion) {
    errors.descripcion = 'Debe completar este cámpo';
  }
  if (!values.stock) {
    errors.stock = 'Debe completar este cámpo';
  }

  return errors;
};

const Dashboard2 = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      nomarchivo: '',
      marca: '',
      modelo: '',
      precio:'',
      ano:'',
      descripcion:'',
      stock:''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      const data = {
        nomarchivo,
        marca,
        modelo,
        precio:Number(precio),
        ano:Number(ano),
        descripcion,
        stock:Number(stock)
    }
    console.log(data)
    axios.post(`${BASE_URL}/notebooks`,data,{headers:{'content-type':'multipart/form-data'}})
    .then(response=>{
        console.log(response.data)
        // alert(response.data.message)
    })
    .catch(error=>console.log(error))
    },
  });
  return (
    
    <form onSubmit={formik.handleSubmit} className=' row d-flex justify-content-center w-50 pt-5'>
      <label htmlFor="nomarchivo">Archivo</label>
      <input
        id="nomarchivo"
        name="nomarchivo"
        type="file"
        onChange={formik.handleChange}
        value={formik.values.nomarchivo}
      />
      {formik.errors.nomarchivo ? <div>{formik.errors.nomarchivo}</div> : null}

      <label htmlFor="marca">Marca</label>
      <input
        id="marca"
        name="marca"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.marca}
      />
      {formik.errors.marca ? <div>{formik.errors.marca}</div> : null}

      <label htmlFor="modelo">Modelo</label>
      <input
        id="modelo"
        name="modelo"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.modelo}
      />
      {formik.errors.modelo ? <div>{formik.errors.modelo}</div> : null}

      <label htmlFor="precio">Precio</label>
      <input
        id="precio"
        name="precio"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.precio}
      />
      {formik.errors.precio ? <div>{formik.errors.precio}</div> : null}

      <label htmlFor="ano">Año</label>
      <input
        id="ano"
        name="ano"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.ano}
      />
      {formik.errors.ano ? <div>{formik.errors.ano}</div> : null}

      <label htmlFor="descripcion">Descripción</label>
      <input
        id="descripcion"
        name="descripcion"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.descripcion}
      />
      {formik.errors.descripcion ? <div>{formik.errors.descripcion}</div> : null}

      <label htmlFor="stock">Stock</label>
      <input
        id="stock"
        name="stock"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.stock}
      />
      {formik.errors.stock ? <div>{formik.errors.stock}</div> : null}


      <button type="submit" className='btn btn-outline-primary'>Submit</button>
    </form>
  );
};

export default Dashboard2