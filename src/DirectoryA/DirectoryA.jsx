import React from 'react'

function DirectoryA() {
  return (
    <div className='flex justify-center'>
    <div className=' justify-center min-h-96 mt-2  m-2.5 rounded-lg  '>
<h2 className='text-2xl font-bold'>Directory A</h2>

<div className='flex   h-12  text-xl bg-slate-100 hover:border-white-2'>
  <h3 className='mt-3'>Directory AA</h3>
  <div className=' flex justify-center items-center '>
    <button className='mx-4'>delete</button>
    <p className='mx-4 '>details</p>
  </div>
</div>
<div className='flex  h-12 text-xl bg-slate-100' >
  <h3 className='mt-3'>Directory AB</h3>
  <div className=' flex justify-center items-center '>
    <button className='mx-4'>delete</button>
    <p className='mx-4'>details</p>
  </div>
</div>

<div className='flex  h-12 text-xl  bg-slate-100'>
  <h3 className='mt-3'> Directory AC</h3>
  <div className=' flex justify-center items-center '>
    <button className='mx-4'>delete</button>
    <p className='mx-4'>details</p>
  </div>
</div>

<div className='flex h-12 text-xl bg-slate-100 '>
  <h3 className='mt-3'>Directory AD</h3>
  <div className=' flex justify-center items-center '>
    <button className='mx-4'>delete</button>
    <p className='mx-4'>details</p>
  </div>
</div>

    </div>
    </div>
    
  
  )
}

export default DirectoryA
