import React from 'react';

function Login() {
  return (
    <div className=' bg-[#f0f2f5] min-h-screen flex flex-row justify-center items-center gap-4'>
      <div className='flex flex-col item-start gap-2 w-[500px]'>
        <h1 className='text-5xl font-bold text-blue-500'>facebook</h1>
        <p className='text-2xl'>
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='bg-white w-[500px] h-[316px]'></div>
      </div>
    </div>
  );
}

export default Login;
