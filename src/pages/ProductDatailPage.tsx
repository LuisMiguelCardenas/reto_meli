import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItemDetail, getItemDetailDescription } from '../services/api/items.api';
import { Loading, NotFound, ProductDetail } from '../ui';

export const ProductDatailPage = () => {

  const params = useParams();
  const [item, setItem] = useState<any>()
  const [description, setDescription] = useState<any>()

  const getData = async () => {
    const data = await getItemDetail(params.id!);
    const dataDesc = await getItemDetailDescription(params.id!);
    setItem(data);
    setDescription(dataDesc);
  }

  useEffect(() => {
    getData()
  }, [])

  if (!item) { return <Loading /> }

  return (
    <div className='productDetailPage'>
      {
        item.id ?
          <ProductDetail {...item} />
          :
          <NotFound message={item.message} />
      }
    </div>
  )
}
