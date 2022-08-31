import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import ClipLoader from 'react-spinners/ClipLoader';
import Modal from 'react-modal';

import { fireAuth } from '../firebase';

const override = {
  display: 'inline-block',
  margin: '0 auto',
  borderColor: 'white',
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

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function Login() {
  let subtitle;
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState('#ffffff');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // console.log(values);
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
          setErrorMessage(errorMessage);
          setLoading(false);
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

            <button
              type='submit'
              className='bg-blue-500 w-full h-[50px] rounded-[5px] text-white font-medium text-[24px] disabled:bg-blue-300'
              disabled={loading ? true : false}
            >
              <span>Log In</span>

              <ClipLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={30}
              />
            </button>
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={!modalIsOpen}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={() => setIsOpen(false)}>close</button>
        <p>{errorMessage}</p>
      </Modal>
    </div>
  );
}

export default Login;
