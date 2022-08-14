import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { getItemDetailDescription } from "../../services/api/items.api";
import { Breadcrumb } from "./Breadcrumb";
import { Loading } from "./Loading";

interface Props {
  id: string;
  title: string;
  price: string;
  condition: string;
  pictures: any[];
  thumbnail: string;
  shipping: {
    free_shipping: boolean;
  };
  plain_text: string;
}

export const ProductDetail: React.FC<Props> = (item) => {
  const [description, setDescription] = useState<any>();

  const getData = async () => {
    const dataDesc = await getItemDetailDescription(item.id);
    setDescription(dataDesc);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!item) { return <p>Pagina no encontrada</p> }
  return (
    <>
      <div className="productDatailContainer">
        <Breadcrumb text={item.title} />
        <div className="ProductDetail">
          <div className="productDetailImage">
            <img
              src={item.pictures[0].url}
              alt=""
            />
          </div>
          <div className="productDetailProps">
            <p className="condition">{item.condition === 'new' && 'Nuevo'}</p>
            <h3 className="title">{item.title}</h3>
            <p className="price">$ {item.price.toLocaleString()}</p>
            <div className="shipping">
              <FontAwesomeIcon className='iconTruck' icon={faTruckFast} />
              <p className="title">Envío gratis a nivel nacional</p>
              <p className="description">Conoce los tiempos y las formas de envío.</p>
            </div>
            <button className="buyButton">Comprar ahora</button>
            <button className="cartButton">Agregar al carrito</button>
          </div>
        </div>
        {description ? (
          <div className="productDetailDescription">
            <h3>Descripción</h3>
            <p>{description.plain_text}</p>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};
