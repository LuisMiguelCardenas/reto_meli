import React from 'react'
import { Link } from 'react-router-dom';

interface Props {
    id: string;
    title: string;
    price: string;
    thumbnail: string;
    shipping: {
        free_shipping: boolean
    }

};


export const ProductCard: React.FC<Props> = (product) => {
    return (
        <div className='productCard'>
            <p className='title'>{product.title}</p>
            <p className='price'>$ {product.price}</p>
            <img className='image' src={product.thumbnail} alt="" />
            {
                product.shipping.free_shipping && <p className='shipping'>Envio gratis</p>
            }
            <Link to= {`item/${product.id}`} >ver mas..</Link>
            <a href={`item/${product.id}`}> ver mas</a>
        </div>
    )
}
