import React from 'react'
import Products from '../Products'

const AllProducts = ({data}) => {
  return (
    <div>
      <Products products={data} />
    </div>
  )
}

export default AllProducts
