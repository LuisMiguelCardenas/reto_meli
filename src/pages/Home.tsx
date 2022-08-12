import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { NotesState } from '../reducers/notesReducer';
import { getItems } from '../services/api/items.api';
import { Breadcrumb } from '../ui/components/Breadcrumb';
import { ProductCard } from '../ui/components/ProductCard';

export const Home = () => {

  const items = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

  const [products, setProducts] = useState<any>([])
  const getProductsList = async () => {
    if(items.length === 0) return
    const products = await getItems(items[items.length-1]);
    setProducts(products)
  }

  useEffect(() => {
    getProductsList()
  }, [items])
  
  console.log(products)

  return (
<>
        {
      items&&items[items.length - 1]?.startsWith('MLA') && items[items.length - 1]?.length>12 && <Navigate to={`/item/${items[items.length - 1]}`} replace={true} />
    } 
    <div className='productListContanier'>
    {
      products.length > 0 ? <Breadcrumb text={items[items.length-1]}/> : null

    }
    
    {
      products.length > 0 ?
      products.slice(0,4).map( (product:any) => (

        <ProductCard 
        key={product.id}
        {...product}
        />

      ))
    :
    <p>Inice una busqueda</p>
    }
  </div>
  </>
  )
}
