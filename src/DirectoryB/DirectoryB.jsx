import React from 'react'

function DirectoryB() {
  return (
    <div className='flex justify-center'>
    <div className=' justify-center min-h-96 mt-2  m-2.5 rounded-lg  '>
<h2 className='text-2xl font-bold'>Directory B</h2>

<div className='flex   h-12  text-xl bg-slate-100 hover:border-white-2'>
  <h3 className='mt-3'>Directory BA</h3>
  <div className=' flex justify-center items-center '>
    <button className='mx-4'>delete</button>
    <p className='mx-4 '>details</p>
  </div>
</div>
<div className='flex  h-12 text-xl bg-slate-100' >
  <h3 className='mt-3'>Directory BB</h3>
  <div className=' flex justify-center items-center '>
    <button className='mx-4'>delete</button>
    <p className='mx-4'>details</p>
  </div>
</div>

<div className='flex  h-12 text-xl  bg-slate-100'>
  <h3 className='mt-3'> Directory BC</h3>
  <div className=' flex justify-center items-center '>
    <button className='mx-4'>delete</button>
    <p className='mx-4'>details</p>
  </div>
</div>

<div className='flex h-12 text-xl bg-slate-100 '>
  <h3 className='mt-3'>Directory BD</h3>
  <div className=' flex justify-center items-center '>
    <button className='mx-4'>delete</button>
    <p className='mx-4'>details</p>
  </div>
</div>

    </div>
    </div>
    
  )
}

export default DirectoryB
