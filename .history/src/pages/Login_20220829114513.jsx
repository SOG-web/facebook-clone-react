import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

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
      alert(JSON.stringify(values, null, 2));
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
        <div className='bg-white w-[500px] h-[316px] drop-shadow-xl rounded-xl'>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input id='email' type='text' {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}

            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type='text'
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
