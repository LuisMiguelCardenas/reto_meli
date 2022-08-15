import { BASE_ITEMS, BASE_ITEMS_CATEGORY, BASE_URL } from "../endPoints/items.endpoint";

export const getItems = async(item:string) => {
  try {
    const resp = await fetch(`${BASE_ITEMS}${item}`)
    const { results } = await resp.json()
    
    return results;
  } catch (error) {
    console.log(error)
  }
  };

  export const getItemDetail = async(id:string) => {
    try {
      const resp = await fetch(`${BASE_URL}/items/${id}`)
      const data = await resp.json()
      
      return data;
    } catch (error) {
      console.log(error)
    }
  };

  export const getItemDetailDescription = async(id:string) => {
    try {
      const resp = await fetch(`${BASE_URL}/items/${id}/description`)
      const data = await resp.json()
      
      return data;
    } catch (error) {
      console.log(error)
    }
  };

  export const getItemDetailCategory = async(title:string) => {
    try {
      const resp = await fetch(`${BASE_ITEMS_CATEGORY}${title}`)
      const data = await resp.json()
      
      return data;
    } catch (error) {
      console.log(error)
    }
  };