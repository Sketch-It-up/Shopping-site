import React from 'react';
import useFetch from '../../../hooks/useFetch';
import Products from '../../Products/Products';

function RelatedProducts({ categoryId, productId }) {
  const { data, loading, error } = useFetch(
    `api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id][$eq]=${categoryId}&pagination[start]=0&pagination[limit]=4`
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='related_products'>
      {data?.data?.length > 0 ? (
        <Products products={data} />
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default RelatedProducts;