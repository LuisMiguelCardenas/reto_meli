import React from 'react'

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
            <a className='productCardImage' href={`item/${product.id}`}>
                <img className='image' src={product.thumbnail} alt="" />
            </a>
            <a className='productCardDetail' href={`item/${product.id}`}>
                <p className='title'>{product.title}</p>
                <p className='price'>$ {product.price.toLocaleString()}</p>
                {
                    product.shipping.free_shipping && <p className='shipping'>Envio gratis</p>
                }
            </a>
        </div>
    )
}
