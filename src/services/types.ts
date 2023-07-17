import { ShippingDetails } from "../pages/Checkout/BillingInformation";

export interface GetProductQuery {}
export interface GetProductByIdQuery {
  id: number | string;
}


export interface APIResponse<T = any> {
  data: T;
  message: string;
  error: boolean;
}

type BaseEntity = {
  id: number;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}

interface User extends BaseEntity {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  roleId: number;
}

type AuthResponse = {
  user: User,
  tokens: {
    access_token: string;
    refresh_token: string;
  }
}

export type RegisterResponse = APIResponse<AuthResponse>
export type LoginResponse = APIResponse<AuthResponse>

export interface LoginMutation {
  email: string;
  password: string;
}

export interface RegisterMutation {
  firstName: string;
  lastName: string;
  email: string
  gender: string;
  phoneNumber: string;
  password: string
  role: "customer",
}

export interface MeQuery {
  id: number | string;
}
export interface GetCartItemsQuery {
  user_id: number | string;
}

export interface AddToCartMutation {
  productId: number;
}

export interface UpdateQuantityMutation extends AddToCartMutation {
  cart_item_id: number;
  quantity: number;
}

export interface DeleteCartItemMutation extends Omit<UpdateQuantityMutation, "quantity"> {}
export interface OrderCheckoutMutation {
  user_id: number;
  cart_item_ids: Array<number>;
  shipping_details: ShippingDetails 
}
export interface GetOrderHistoryQuery {
  user_id: number
}