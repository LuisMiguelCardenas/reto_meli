import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getItemDetailDescription } from '../../services/api/items.api';

interface Props {
    id: string;
    title: string;
    price: string;
    condition: string;
    pictures: any[];
    thumbnail: string;
    shipping: {
        free_shipping: boolean
    };
    plain_text: string

};

export const ProductDetail: React.FC<Props> = (item) => {
    const [description, setDescription] = useState<any>()

    const getData = async () => {
        const dataDesc = await getItemDetailDescription(item.id);
        setDescription(dataDesc);
    }

    useEffect(() => {
        getData()
    }, [])
    console.log(description)
    return (
        <div>
            <h1>{item.title}</h1>
            <p>{item.condition}</p>
            <img src={item.pictures[0].url} alt="" />
            <p>{item.price}</p>
            <button>Comprar</button>
            {
                description ?
                    <p>{description.plain_text}</p>
                    :
                    <p>cargando</p>
            }
        </div>
    )
}
