import React from 'react';

function Navbar() {
  return (
    <div className='bg-blue-500 w-full flex flex-row justify-between items-center h-12 px-6'>
      <div className='flex flex-row gap-5'>
        <i className='fa-brands fa-square-facebook text-2xl font-bold'></i>
        <h2 className='text-white text-2xl font-bold'>Facebook</h2>
      </div>
    </div>
  );
}

export default Navbar;
