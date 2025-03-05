import React from 'react';
import useFetch from '../../hooks/useFetch';
import Products from '../Products/Products';
import { useParams, NavLink } from 'react-router-dom';

const Category = () => {
const { id } = useParams();
const { data, loading, error } = useFetch(`api/products?populate=*&[filters][categories][id]=${id}`);

    return (
        <>
        <div className="container py-5" >
            <div className="row ">
                <div className="category-title d-flex">
                    <NavLink to="/">
                        <h4>Home</h4>
                    </NavLink>
                    <span className='px-3'>/</span>
                    <h4 >
                        {
                            data?.data?.[0]?.categories?.[0]?.title || "Category"
                        }
                    </h4>
                </div>
            </div>

            <Products products={data} />
        </div>
        </>
    )
}

export default Category;