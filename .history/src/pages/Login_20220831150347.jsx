import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import ClipLoader from 'react-spinners/ClipLoader';

import { fireAuth } from '../firebase';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'white',
  marginLeft: '-24px',
};

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
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#ffffff');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      setLoading(true);
      createUserWithEmailAndPassword(fireAuth, values.email, values.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setLoading(false);
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
      <div className='flex flex-col gap-2 items-center'>
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

            <div className='bg-blue-500 w-full h-[50px] rounded-[5px] text-white font-medium text-[24px] flex flex-row items-center gap-2'>
              <input
                type='submit'
                className='text-white font-medium text-[24px] w-[90%]'
              >
                Log In
              </input>
              <ClipLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={30}
              />
            </div>
          </form>
          <p className='text-blue-500 text-center mt-[15px] capitalize'>
            forgotten password ?
          </p>
          <hr className='bg-black h-[1px] mt-5 mb-5' />
          <div className=' flex justify-center items-center flex-col mb-6'>
            <button className=' bg-green-600 px-6 py-3 rounded-[5px] text-white font-semibold'>
              Create New Account
            </button>
          </div>
        </div>
        <p className='mt-2'>
          <span className='font-bold'>Create a Page</span> for a celebrity,
          brand or business.
        </p>
      </div>
    </div>
  );
}

export default Login;
