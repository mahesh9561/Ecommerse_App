import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='bg-orange-500 w-full min-h-[100px] items-center shadow-lg'>
      <div className='container py-3 text-center'>
        <div className='flex justify-center text-white gap-6'>
          <Link to='/privacy-policy'>Privacy Policy</Link>
          <Link to='/terms-of-service'>Terms of Service</Link>
          <Link to='/about'>About SnapUp</Link>
        </div>
        <span>@2024 : Design By Mahesh Pathak</span>
      </div>
    </div>
  );
}

export default Footer;
