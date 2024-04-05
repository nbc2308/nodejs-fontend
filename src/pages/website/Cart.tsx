/* eslint-disable @typescript-eslint/no-explicit-any */

import useCart from "@/common/hooks/useCart";
import { ChangeEvent } from "react";

const CartPage = () => {
  const {
    data,
    mutate,
    handleQuantityChange,
    calculateTotal,
    isLoading,
    isError,
  } = useCart();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div className="container">
      <section className="cart">
        <div className="table-container">
          <table className="table">
            <thead>
              <tr style={{ backgroundColor: "rgba(249, 241, 231, 1)" }}>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.products.map((product: any, index: number) => {
                return (
                  <tr key={index}>
                    <td scope="col">{index + 1}</td>
                    <td scope="col">
                      <img src={product.image} />
                    </td>
                    <td scope="col">{product.name}</td>
                    <td scope="col">{product.price}</td>
                    <td className="border-2">
                      <button
                        className="py-2 px-4 bg-slate-400"
                        onClick={() =>
                          mutate({
                            action: "DECREMENT",
                            productId: product.productId,
                          })
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-3 h-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </button>
                      {product.quantity}
                      <input
                        type="number"
                        onInput={(e) =>
                          handleQuantityChange(
                            product.productId,
                            e as ChangeEvent<HTMLInputElement>
                          )
                        }
                      />
                      <button
                        className="py-2 px-4 bg-emerald-400"
                        onClick={() =>
                          mutate({
                            action: "INCREMENT",
                            productId: product.productId,
                          })
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-3 h-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 15.75 7.5-7.5 7.5 7.5"
                          />
                        </svg>
                      </button>
                    </td>
                    <td scope="col">{product.price * product.quantity}</td>
                    <td scope="col">
                      <button
                        className="py-2 px-4 bg-red-500 text-white rounded-sm"
                        onClick={() =>
                          mutate({
                            action: "REMOVE",
                            productId: product.productId,
                          })
                        }
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="cart-totals">
          <h3 style={{ textAlign: "center", marginTop: 25 }}>Cart Totals</h3>
          <br />
          <div className="text">
            <h5>Total</h5>
            <span style={{ marginLeft: 30 }}>${calculateTotal()}</span>
          </div>
          <br />
          <br />
          <br />
          <a className="btn btn-primary" href="checkout.html">
            Check out
          </a>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
