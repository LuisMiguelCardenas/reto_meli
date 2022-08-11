import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { getItemDetailCategory } from "../../services/api/items.api";

interface Props {
  text: string;
}

export const Breadcrumb: React.FC<Props> = ({ text }) => {
    console.log(text)
  const [detailCategory, setDetailCategory] = useState<any>();

  const getData = async () => {
    const data = await getItemDetailCategory(text);

    setDetailCategory(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(detailCategory);

  return (
    
    <div className="breadcrumbContainer">
      {detailCategory && <p>{detailCategory[0].category_name}</p>}
      {detailCategory && detailCategory[0].attributes.map((category: any) => (
        <p><FontAwesomeIcon className='iconAngle' icon={faAngleLeft} />{category.value_name}</p>
      ))}
    </div>
  );
};
