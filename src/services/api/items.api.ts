import { BASE_ITEMS, BASE_ITEMS_CATEGORY, BASE_URL } from "../endPoints/items.endpoint";

export const getItems = async(item:any) => {
    const resp = await fetch(`${BASE_ITEMS}${item}`)
    const { results } = await resp.json()
    
    // console.log(results)
    return results;
  };

  export const getItemDetail = async(id:string) => {
    const resp = await fetch(`${BASE_URL}/items/${id}`)
    const data = await resp.json()
    
    return data;
  };

  export const getItemDetailDescription = async(id:string) => {
    const resp = await fetch(`${BASE_URL}/items/${id}/description`)
    const data = await resp.json()
    
    return data;
  };

  export const getItemDetailCategory = async(title:any) => {
    const resp = await fetch(`${BASE_ITEMS_CATEGORY}${title}`)
    const data = await resp.json()
    
    return data;
  };