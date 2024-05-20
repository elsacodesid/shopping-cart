import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <>
      <div className="flex border-slate-500 justify-center">
        {cart && cart.length ? (
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl max-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {cart.map((cartItem) => (
                <CartTile cartItem={cartItem} />
              ))}
            </div>
            <div>
              <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14 font-bold">
                <h1 className="font-bold text-lg text-green-900">
                  Your Cart Summary
                </h1>
                <p>
                  <span className="text-gray-800 font-bold">Total Item</span>
                  <span>: {cart.length}</span>
                </p>
                <p>
                  <span className="text-gray-800 font-bold">Total Amount</span>
                  <span>: {totalCart}</span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="min-h-[80vh] flex flex-col justify-center">
            <h1 className="text-gray-800 font-bold text-xl mb-2 items-center justify-center">
              Your cart is empty
            </h1>
            <Link to="/">
              <button className="bg-blue-950 text-white p-2 border-2 rounded-lg font-semibold ">
                Shop now
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
