export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    resturant_name: string;
    imageUrl?: string
    quantity: number;
}

export interface CartItem extends Product {
    quantity: number;
}