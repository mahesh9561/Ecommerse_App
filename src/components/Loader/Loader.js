import React from 'react'
import { loader } from '../../utils/images'

function Loader() {
  return (
    <div className=' container'>
      <div className=' loader flex justify-center text-center'>
        <img src={loader} alt="Loading" />
      </div>
    </div>
  )
}

export default Loader