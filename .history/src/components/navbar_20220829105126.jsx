import React from 'react';

function Navbar() {
  return (
    <div className='bg-blue-500 w-full flex flex-row justify-between items-center h-12 px-6'>
      <div className=''>
        <i className='fa-brands fa-facebook text-3xl font-bold text-white'></i>
      </div>
      <div className='flex flex-row gap-[80px]'>
        <div>
          <i class='fa-solid fa-house text-2xl font-bold text-white'></i>
        </div>
        <div>
          <i class='fa-solid fa-tv text-2xl font-bold text-white'></i>
        </div>
        <div>
          <i class='fa-solid fa-store text-2xl font-bold text-white'></i>
        </div>
        <div>
          <i class='fa-solid fa-users-rectangle text-2xl font-bold text-white'></i>
        </div>
        <div>
          <i class='fa-solid fa-gamepad text-2xl font-bold text-white'></i>
        </div>
      </div>
      <div className='flex flex-row gap-3'>
        <div className=''>
          <i class='fa-solid fa-bars text-3xl font-bold text-white'></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
