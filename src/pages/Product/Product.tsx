import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BreadCrumb } from "../../components/BreadCrumb/BreadCrumb";
import { BaseLayout } from "../../components/Layout/BaseLayout";
import { useAddToCartMutation } from "../../services/cart";
import { ProductList } from "./ProductList";

export const Product = () => {
  const [addToCart, addToCartResponse] = useAddToCartMutation();

  const userId = localStorage.getItem("access_token");
  const navigate = useNavigate();
  const handleAddToCart = async (id: string | number, name: string) => {
    if (userId == null || !userId) {
      navigate("/auth");
      return;
    }
    console.log('Adding item to cart');
    await addToCart({ productId: +id });
  };

  useEffect(() => {
    if (addToCartResponse.isSuccess) {
      toast.success(addToCartResponse.data.message);
			navigate("/cart")
		}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addToCartResponse.isSuccess]);

  useEffect(() => {
    if (addToCartResponse.isError) {
      toast.error((addToCartResponse.error as any).data.message);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addToCartResponse.isError]);

  return (
    <BaseLayout>
      <React.Fragment>
        <BreadCrumb title="Product"  />
        <ProductList handleAddToCart={handleAddToCart} />
      </React.Fragment>
    </BaseLayout>
  );
};
