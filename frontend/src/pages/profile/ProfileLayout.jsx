import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBarProfile from '@c_profile/NavBarProfile';
import Footer from '@c_profile/Footer';
import Sidebar from '@c_profile/Sidebar';
import Breadcrumb from '@c_profile/Breadcrumb';

const ProfileLayout = () => {
    return (
        <div className='profile_layout  w-[100%] bg-gray-100  min-h-[100vh] flex flex-col  justify-between content-start '>
            
<NavBarProfile />
<Breadcrumb />
<div className='  w-[100%]  flex flex-row '>
    <Sidebar />
<div className='profile_container w-10/11 p-20'> 
    <Outlet /> 
</div>
</div>
  <Footer />
        </div>
    );
};

export default ProfileLayout;