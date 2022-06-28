import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { BASE_URL } from '../../utils';

const Dashboard = () => (
  <div>
    <h1 className='text-center'>Dashboard</h1>
    <Formik
      initialValues={{ 
        nomarchivo: '',
        marca: '',
        modelo: '',
        precio: '',
        ano: '',
        descripcion: '',
        stock: '',
         }}
      validate={values => {
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
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      let formdata = new FormData()
      formdata.append('nomarchivo',values.nomarchivo)
      formdata.append('marca',values.marca)
      formdata.append('modelo',values.modelo)
      formdata.append('precio',values.precio)
      formdata.append('descripcion',values.descripcion)
      formdata.append('stock',values.stock)
      console.log(formdata)

      axios.post(`${BASE_URL}/notebooks`,formdata,)
        .then(response=>{
            console.log(response.data)
            // alert(response.data.message)
        })
        .catch(error=>console.log(error))
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        submitForm
      }) => (
        <form className='row d-flex flex-column align-content-center ' onSubmit={handleSubmit}>
          <label htmlFor="nomarchivo"></label>
          <input
            className="form-control w-25 mt-3 mb-3"
            id='nomarchivo'
            type='file'
            name="nomarchivo"
            onChange={(event)=>{
              setFieldValue('nomarchivo',event.target.files[0])
            }}
            onBlur={handleBlur}
            value={values.nomarchivo}
          />
          {errors.nomarchivo && touched.nomarchivo && errors.nomarchivo}
          <input
            className="form-control w-25 mt-3 mb-3"
            type="text"
            name="marca"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.marca}
          />
          {errors.marca && touched.marca && errors.marca}
          <input
            className="form-control w-25 mt-3 mb-3"
            type="text"
            name="modelo"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.modelo}
          />
          {errors.modelo && touched.modelo && errors.modelo}
          <input
            className="form-control w-25 mt-3 mb-3"
            type="number"
            name="precio"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.precio}
          />
           {errors.precio && touched.precio && errors.precio}
          <input
            className="form-control w-25 mt-3 mb-3"
            type="number"
            name="ano"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ano}
          />
          {errors.ano && touched.ano && errors.ano}
          <input
            className="form-control w-25 mt-3 mb-3"
            type="text"
            name="descripcion"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.descripcion}
          />
          {errors.descripcion && touched.descripcion && errors.descripcion}
          <input
            className="form-control w-25 mt-3 mb-3"
            type="number"
            name="stock"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.stock}
          />
          {errors.stock && touched.stock && errors.stock}
         
          <button type="submit" className='btn btn-outline-primary w-25 mt-3 mb-3'onClick={submitForm} disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Dashboard;



// const errors = {};
// if (!values.nomarchivo) {
//   errors.nomarchivo = 'Debe completar este cámpo';
// }

// if (!values.marca) {
//   errors.marca = 'Debe completar este cámpo';
// }

// if (!values.modelo) {
//   errors.modelo = 'Debe completar este cámpo';
// }
// if (!values.precio) {
//   errors.precio = 'Debe completar este cámpo';
// }
// if (!values.ano) {
//   errors.ano = 'Debe completar este cámpo';
// }
// if (!values.descripcion) {
//   errors.descripcion = 'Debe completar este cámpo';
// }
// if (!values.stock) {
//   errors.stock = 'Debe completar este cámpo';
// }

// return errors;