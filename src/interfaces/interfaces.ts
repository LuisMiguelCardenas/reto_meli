import { Interface } from "readline";

export interface Product {
    id: string;
    title: string;
    price: string;
    thumbnail: string;
    shipping: {
        free_shipping: boolean
    }
}

export interface Products {
    products: Product[]
}

export interface DetailProduct {
    attributes?:any
    id: string;
    title: string;
    price: string;
    category_name?:string,
    condition: string;
    pictures: any[];
    thumbnail: string;
    shipping: {
      free_shipping: boolean;
    };
    plain_text: string;
  }

  export interface CategoryProduct {
    id: string,
    value_name: string
  }