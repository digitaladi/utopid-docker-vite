import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBarProfile from '@c_profile/NavBarProfile';

const ProfileLayout = () => {
    return (
        <div className='profile_layout'>
            
<NavBarProfile />

<div className='profile_container'> 
    <Outlet /> 
</div>

        </div>
    );
};

export default ProfileLayout;