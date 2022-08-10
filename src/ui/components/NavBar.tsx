import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { getItems } from '../../services/api/items.api'
import { Link } from 'react-router-dom'
import { ProductCard } from './ProductCard'

export const NavBar = () => {

  const [inputValue, setfInputValue] = useState('');
  const [products, setProducts] = useState<any>([]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfInputValue(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onHandleClick();
  }

  const onHandleClick = async () => {
    const items = await getItems(inputValue);
    setfInputValue('')
    setProducts(items)
  }

  console.log(products)

  return (
    <>
      <div className="navbar">
        <img className='logo' src="./assets\LogoMercadoLibre.svg-1.png" alt="Logo Mercadolibre" />
        <form onSubmit={e => onSubmit(e)}>
          <input
            className='inputNavBar'
            placeholder='Buscar productos, marcas y más...'
            type="text" value={inputValue}
            onChange={(e) => onInputChange(e)}
          />
          <Link to='/'>
            <button onClick={() => onHandleClick()} >
              <FontAwesomeIcon className='iconSearch' icon={faMagnifyingGlass} />
            </button>
          </Link>
        </form>
      </div>
      <div className='productListContanier'>
        {
          products.length > 0 &&
          products.map( (product:any) => (

            <ProductCard 
            key={product.id}
            {...product}
            />

          ))
        }
      </div>
    </>
  )
}
