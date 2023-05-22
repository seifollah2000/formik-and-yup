import { Form, Formik } from 'formik'
import React from 'react'
import Input from './Component/Input'
import * as Yup from 'yup'
import './App.css'

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .min(6, "user name must be at least 5 characters")
    .required("Name is required"),
  email: Yup.string().email()
    .min(6, "user name must be at least 5 characters")
    .required("Name is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});



export default function App() {

  return (
    <div className="formikAndYup">
      <div className=" mx-auto w-25 rounded-3">
        <Formik
          initialValues={{ userName: "", email: "", password: "" }}
          onSubmit={async valuse => {
            console.log(valuse)
            await new Promise((resolve) => setTimeout(resolve, 1000));
          }}

          validationSchema={validationSchema}
        >
          {
            ({ touched, isSubmitting, errors }) => (
              <Form>
                <Input clickInINP={touched.userName} typeINP="text" placeholderINP="user Name" titleINP="userName" errorINP={errors.userName} />
                <Input clickInINP={touched.email} typeINP="email" placeholderINP="Email" titleINP="email" errorINP={errors.email} />
                <Input clickInINP={touched.password} typeINP="password" placeholderINP="password" titleINP="password" errorINP={errors.password} />

                <button type='submit ' className='w-100 btn py-2 btn-danger my-3'  >
                  {
                    isSubmitting ? (
                      "LODING ..."
                    ) : (

                      " SUBMIT"
                    )
                  }

                </button>
              </Form>
            )
          }

        </Formik>
      </div>

    </div>
  )
}
