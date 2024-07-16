import React from 'react'
import {TailSpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center',alignItems: 'center' , height: '100vh'}}>

<TailSpin
  visible={true}
  height="100"
  width="80"
  color="white"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  />


    </div>
  )
}

export default Loader
