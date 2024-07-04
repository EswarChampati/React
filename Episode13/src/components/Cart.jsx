import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-8">
      <h1 className="font-bold text-xl">cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer"
          onClick={handleClearCart}
        >
          Clear items
        </button>
        {cartItems.length === 0 && <h1>cart is empty add items to the cart</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
