import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useGlobalContext } from "../../../context/globalContext";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

import { getProductById } from "../API/getProductById";

import { checkIfProductInBasket } from "./utils/checkIfProductInBasket";

import type { TRecommendedProducts } from "../../interfaces/interfaces";
import Loading from "../../Loading/Loading";
import { ProductDetailedInfContext } from "./context/productDetailedInfContext";

export default function Product() {
  const { product_type, product_id } = useParams();
  const { basket } = useGlobalContext();

  const [product, setProduct] = useState<TRecommendedProducts[] | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getProductById(product_type, product_id).then((product) =>
      setProduct(product)
    );
  }, [product_type, product_id]);

  const productStatus = checkIfProductInBasket(product, basket);

  return (
    <div className="relative bg-[#ffffff]">
      <ProductDetailedInfContext.Provider
        value={{ product, quantity, productStatus, setQuantity, setLoading }}
      >
        <Header />

        <Main />

        <Footer />
      </ProductDetailedInfContext.Provider>

      {loading && <Loading />}
    </div>
  );
}
