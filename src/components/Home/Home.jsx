import React, { useContext, useEffect } from 'react'
import Banner from './Banner/Banner'
import Category from './Category/Category'
import Products from '../Products/Products'
import NewArrivals from '../Products/NewArrivals'
import Discount from './Discount/Discount'
import OrderMethod from './OrderMethod/OrderMethod'
import SingleProducts from '../SingleProducts/SingleProducts'
import { FetchDataFromAPI } from '../../utils/api'  
import AppContext, { Context } from '../../utils/context'


const Home = () => {

  const { category, setCategory, products, setProducts } = useContext(Context);

  useEffect(() => {
    getCategory();
    getProducts();
  },[]);

  const getCategory = () => {
    FetchDataFromAPI('api/categories?populate=*').then((res) => {
      //console.log(res);
      setCategory(res);
    });

    FetchDataFromAPI('api/products?populate=*').then((res) => {
      console.log(res);
    });
  };

  const getProducts = () => {
    FetchDataFromAPI('api/products?populate=*').then((res) => {
      //console.log(res);
      setProducts(res);
    });
  };

  return (
    <div>
      <Banner />
      {/* <SingleProducts/> */}
      <Category category={category} />
      <Products products={products} />
      <NewArrivals />
      <Discount />
      <div className="section1 py-5">
        <OrderMethod />
      </div>
    </div>
  )
}

export default Home
