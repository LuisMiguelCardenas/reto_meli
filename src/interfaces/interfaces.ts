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