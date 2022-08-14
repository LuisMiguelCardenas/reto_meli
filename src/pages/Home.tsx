import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Product } from '../interfaces/interfaces';
import { InputSearchState } from '../reducers/inputSearchReducer';
import { getItems } from '../services/api/items.api';
import { Breadcrumb } from '../ui/components/Breadcrumb';
import { ProductCard } from '../ui/components/ProductCard';

export const Home = () => {

  const items = useSelector<InputSearchState, InputSearchState["inputSearch"]>(
    (state) => state.inputSearch
  );
  const [products, setProducts] = useState<Product[]>([])
  const getProductsList = async () => {
    if (items.length === 0) return
    const products = await getItems(items[items.length - 1]);
    setProducts(products)
  }

  useEffect(() => {
    getProductsList()
  }, [items])

  return (
    <>
      {
        items && items[items.length - 1]?.startsWith('MLA') && <Navigate to={`/item/${items[items.length - 1]}`} replace={true} />
      }
      <div className='productListContanier'>
        {
          products.length > 0 ? <Breadcrumb text={items[items.length - 1]} /> : null
        }
        {
          products.length > 0 ?
            products.slice(0, 4).map((product: Product) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))
            :
            <p className='homeText mt-5 fsxxl'>Bienvenido a mercado libre, inicie una búsqueda</p>
        }
      </div>
    </>
  )
}
