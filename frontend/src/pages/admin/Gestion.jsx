import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuGestion from '@c_admin/MenuGestion'

const Gestion = () => {
  return (
    <div className=' w-[100%]'>

<MenuGestion />

<div className='bg-amber-200'>


    <Outlet />
</div>

    </div>
  )
}

export default Gestion