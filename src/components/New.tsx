import { useLocalStorage } from "@/common/hooks/useStorage";
import { IProduct } from "@/common/types/product";
import { getAllProducts } from "@/services/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const New = () => {
  const queryClient = useQueryClient();
  const [user] = useLocalStorage("user", {});
  const userId = user?.user?._id;
  const { mutate } = useMutation({
    mutationFn: async ({
      productId,
      quantity,
    }: {
      productId: string;
      quantity: number;
    }) => {
      const { data } = await axios.post(
        `http://localhost:8080/api/v1/carts/add-to-cart`,
        {
          productId,
          quantity,
          userId,
        }
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["carts", userId],
      });
    },
  });
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["PRODUCT_KEY"],
    queryFn: getAllProducts,
  });

  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (isError) {
    return <p>Error.......</p>;
  }
  return (
    <section className="news">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-heading__title">New</h2>
        </div>
        <div className="section-body">
          <div className="product-list">
            {products?.map((product: IProduct, index: number) => (
              <div key={index} className="product-item">
                <div className="product-image">
                  <img
                    src={product?.image}
                    alt="#"
                    className="product__thumbnail"
                  />
                  <span className="product-sale">30%</span>
                </div>
                <div className="product-info">
                  <h3 className="product__name">
                    <a href="#" className="product__link">
                      {product?.name}
                    </a>
                  </h3>
                  <a href="#" className="product__category">
                    {product?.name}
                  </a>
                  <div className="product-price">
                    <span className="product-price__new"></span>
                    <span className="product-price__old">{product?.price}</span>
                  </div>
                </div>
                <div className="product-actions">
                  <Link
                    to={`/product/${product._id}`}
                    className="btn product-action__quickview"
                  >
                    Quick View
                  </Link>
                  <button
                    className="btn product-action__addtocart"
                    onClick={() =>
                      mutate({ productId: product._id, quantity: 2 })
                    }
                  >
                    Add To Cart
                  </button>
                  <div className="product-actions-more">
                    <svg
                      width={12}
                      height={14}
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 9.66665C9.47467 9.66665 9 9.87331 8.644 10.2046L3.94 7.46665C3.97333 7.31331 4 7.15998 4 6.99998C4 6.83998 3.97333 6.68665 3.94 6.53331L8.64 3.79331C9 4.12665 9.47333 4.33331 10 4.33331C11.1067 4.33331 12 3.43998 12 2.33331C12 1.22665 11.1067 0.333313 10 0.333313C8.89333 0.333313 8 1.22665 8 2.33331C8 2.49331 8.02667 2.64665 8.06 2.79998L3.36 5.53998C3 5.20665 2.52667 4.99998 2 4.99998C0.893333 4.99998 0 5.89331 0 6.99998C0 8.10665 0.893333 8.99998 2 8.99998C2.52667 8.99998 3 8.79331 3.36 8.45998L8.05867 11.2053C8.02112 11.3563 8.00143 11.5111 8 11.6666C8 12.0622 8.1173 12.4489 8.33706 12.7778C8.55682 13.1067 8.86918 13.363 9.23463 13.5144C9.60009 13.6658 10.0022 13.7054 10.3902 13.6282C10.7781 13.551 11.1345 13.3606 11.4142 13.0809C11.6939 12.8012 11.8844 12.4448 11.9616 12.0568C12.0387 11.6689 11.9991 11.2667 11.8478 10.9013C11.6964 10.5358 11.44 10.2235 11.1111 10.0037C10.7822 9.78394 10.3956 9.66665 10 9.66665Z"
                        fill="white"
                      />
                    </svg>
                    <span className="product-action__share">Share</span>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0799 7L11.0799 8L14.5199 4.55L10.9999 1L9.99992 2L11.7999 3.8H1.99992V5.2H11.8199L10.0799 7ZM5.85992 9L4.85992 8L1.41992 11.5L4.90992 15L5.90992 14L4.09992 12.2H13.9999V10.8H4.09992L5.85992 9Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z"
                        stroke="white"
                        strokeWidth="1.8"
                      />
                    </svg>
                    <span className="product-action__like">Like</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default New;
