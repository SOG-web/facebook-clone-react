import React from 'react';

function Navbar() {
  return (
    <div className='bg-blue-500 w-full flex flex-row justify-between items-center h-12 px-6'>
      <div className=''>
        <i className='fa-brands fa-facebook text-3xl font-bold text-white'></i>
      </div>
      <div className='flex flex-row gap-5'>
        <div>
          <i class='fa-solid fa-house text-3xl font-bold text-white'></i>
        </div>
        <div>
          <i class='fa-solid fa-tv text-3xl font-bold text-white'></i>
        </div>
        <div>
          <i class='fa-solid fa-store text-3xl font-bold text-white'></i>
        </div>
        <div>
          <i class='fa-solid fa-users-rectangle text-3xl font-bold text-white'></i>
        </div>
        <div>
          <i class='fa-solid fa-gamepad text-3xl font-bold text-white'></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
