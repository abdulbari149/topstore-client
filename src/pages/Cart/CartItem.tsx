import React, { useEffect, useState } from "react";
import { Product } from "../Product/type";
import _ from "lodash";
import {
  useDeleteCartItemMutation,
  useUpdateQuantityMutation,
} from "../../services/cart";
import { useDebounce } from "usehooks-ts";
import { toast } from "react-toastify";
export interface Item {
  id: number;
  price: number;
  quantity: number;
  subTotal: number;
  product: Product;
}

interface Props {
  item: Item;
}

export const CartItem: React.FC<Props> = ({ item }) => {
  const [orderedQuantity, setOrderedQuantity] = useState(item.quantity);
  const [totalAmount, setTotalAmount] = useState(item.subTotal);
  const debounceQuantity = useDebounce(orderedQuantity, 1500);
  const [updateQuantity, updateQuantityResponse] = useUpdateQuantityMutation();
  const [removeCartItem, removeCartItemResponse] = useDeleteCartItemMutation();

  const handleOrderedQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setOrderedQuantity(value);
    setTotalAmount(value * item.price);
  };

  const handleUpdateQuantity = async () => {
    await updateQuantity({
      productId: item.product.id,
      cart_item_id: item.id,
      quantity: debounceQuantity
    });
  };

  const handleRemoveCartItem = async (e: React.MouseEvent<HTMLElement>) => {
    await removeCartItem({
      cart_item_id: item.id,
      productId: item.product.id,
    });
  };
  // For Update Quantity
  useEffect(() => {
    if (item.quantity !== debounceQuantity) {
      handleUpdateQuantity();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceQuantity]);

  useEffect(() => {
    if (updateQuantityResponse.isSuccess) {
      toast.success(updateQuantityResponse.data.message);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateQuantityResponse.isSuccess]);

  useEffect(() => {
    if (updateQuantityResponse.isError) {
      toast.error((updateQuantityResponse.error as any).data.message ?? "");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateQuantityResponse.isError]);

  useEffect(() => {
    if (removeCartItemResponse.isSuccess) {
      console.log(removeCartItemResponse.data);
      toast.success(removeCartItemResponse.data.message);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removeCartItemResponse.isSuccess]);

  useEffect(() => {
    if (removeCartItemResponse.isError) {
      console.log(removeCartItemResponse.error);
      toast.error((removeCartItemResponse.error as any).data.message);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removeCartItemResponse.isError]);

  return (
    <tr>
      <td className="product-thumbnail">
        <img
          className="img-responsive ml-15px"
          src={item.product.thumbnail}
          alt={item.product.name}
        />
      </td>
      <td className="product-name">
        <a href="/">{_.capitalize(item.product.name)}</a>
      </td>
      <td className="product-price-cart">
        <span className="amount">Rs. {item.price}</span>
      </td>
      <td className="product-quantity">
        <div className="cart-plus-minus">
          <input
            className="cart-plus-minus-box"
            type="number"
            name="qtybutton"
            max={item.product.quantity}
            value={orderedQuantity}
            onChange={handleOrderedQuantity}
          />
        </div>
      </td>
      <td className="product-subtotal">Rs. {totalAmount}</td>
      <td className="product-remove">
        <span className="px-2" style={{ cursor: "pointer" }}>
          <i className="fa fa-pencil"></i>
        </span>
        <button
          className="px-2"
          style={{ cursor: "pointer" }}
          onClick={handleRemoveCartItem}
					disabled={removeCartItemResponse.isLoading}
        >
          <i className="fa fa-times"></i>
        </button>		
      </td>
    </tr>
  );
};
