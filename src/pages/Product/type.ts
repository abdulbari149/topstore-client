export interface Product {
  id: number;
  name: string;
  businessId: number,
  quantity: number,
  categoryId: number,
  description: string;
  thumbnail: string;
  price: number;
  images: ProductImages[]
}


interface ProductImages {
  imageUrl: string
}