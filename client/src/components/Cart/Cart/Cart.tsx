import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import { useGlobalContext } from "../../../context/globalContext";

export default function Cart() {
  const { basket } = useGlobalContext();

  const test = new URL("../../../assets/svg.svg", import.meta.url).href;

  return (
    <div className="relative bg-[#ffffff]">
      <Header />

      {basket.length > 0 ? (
        <>
          <Main basket={basket} />

          <Footer />
        </>
      ) : (
        <div className="h-screen flex items-center justify-center flex-col gap-10">
          <div>
            <img src={test} alt="" />
          </div>
          <span className="text-lg font-semibold text-gray-500">
            Sorry, but your cart is empty yet!
          </span>
        </div>
      )}
    </div>
  );
}
