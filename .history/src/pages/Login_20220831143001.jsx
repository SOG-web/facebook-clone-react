import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { fireAuth } from '../firebase';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .label('Email')
    .required('Email is Required'),
  password: Yup.string()
    .min(8, 'Must be 6 characters or more')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      'Password must contain at least one lowercase letter, one uppercase letter, one number and one special character'
    )
    .label('Password')
    .required('Password is required'),
});

function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      createUserWithEmailAndPassword(fireAuth, values.email, values.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
    },
  });

  return (
    <div className=' bg-[#f0f2f5] min-h-screen flex flex-row justify-center items-center gap-4'>
      <div className='flex flex-col item-start gap-2 w-[500px]'>
        <h1 className='text-5xl font-bold text-blue-500'>facebook</h1>
        <p className='text-2xl'>
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='bg-white w-[400px] drop-shadow-xl rounded-xl px-3'>
          <form onSubmit={formik.handleSubmit} className='w-full'>
            <div className='mb-4 mt-4'>
              <input
                id='email'
                type='text'
                {...formik.getFieldProps('email')}
                placeholder='email address'
                className='h-[50px] p-4 w-full border-2 rounded-[5px] mt-4'
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>

            <div className='mb-4'>
              <input
                id='password'
                type='text'
                placeholder='password'
                {...formik.getFieldProps('password')}
                className='h-[50px] p-4 w-full border-2 rounded-[5px] mt-4'
              />
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>

            <button
              type='submit'
              className='bg-blue-500 w-full h-[50px] rounded-[5px] text-white font-medium text-[24px]'
            >
              Log In
            </button>
          </form>
          <p className='text-blue-500 text-center mt-[15px] capitalize'>
            forgotten password ?
          </p>
          <hr className='bg-black h-[1px] mt-5 mb-5' />
          <div className=' flex justify-center items-center flex-col'>
            <button className=' bg-green-600 px-6 py-3 rounded-[5px] text-white font-semibold'>
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
