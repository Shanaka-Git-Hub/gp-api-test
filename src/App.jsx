import React, { useEffect } from 'react'

export default function App() {

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products').
    then((resp)=> resp.json()).
    then((json)=> console.log(json))
  },[])

  return (
    <div>
      <h1>gp-api-calling testing</h1>
    </div>
  )
}
