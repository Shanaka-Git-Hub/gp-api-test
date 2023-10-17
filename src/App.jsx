import React, { useEffect, useState } from 'react'

export default function App() {

  const [products,setProducts]=useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products').
    then((resp)=> resp.json()).
    then((json)=> setProducts(json))
  },[])

  return (
    <div>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Catogary</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((e,index)=>(
              <tr key={index}>
                <td>{e.id}</td>
                <td>{e.category}</td>
                <td>{e.description}</td>
                <td>{e.price}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
