import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getProductById } from "@/services/product";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["PRODUCT_KEY", id],
    queryFn: async () => await getProductById(id as string),
  });

  if (isLoading) {
    return <p>Loading.....</p>;
  }
  return (
    <div>
      <div>
        <section className="banner">
          <div className="banner__big">
            <img
              src="https://picsum.photos/id/10/1440/500"
              className="banner__img"
            />
          </div>
        </section>
        {/*End .banner*/}
        {/* controller-shop */}
        <section className="controller-shop">
          <h2
            style={{
              display: "flex",
              justifyContent: "flex-start",
              color: "rgba(159, 159, 159, 1)",
            }}
          >
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Detail Product</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </h2>
        </section>
        {/* end-controller-shop */}
        <section className="product-info-shop">
          <div className="image-product">
            <div className="info-colums">
              <img src="/../src/assets/info2.svg" />
              <img src="/../src/assets/info1.svg" />
              <img src="/../src/assets/info3.svg" />
              <img src="/../src/assets/info4.svg" />
            </div>
            <img width={400} src={data.image} />
          </div>
          <div>
            <p style={{ fontSize: 42 }}>{data.name}</p>
            <p>{data.price}đ</p>
            <p>
              <img src="/../src/assets/icons/star.svg" />
              <img src="/../src/assets/icons/star.svg" />
              <img src="/../src/assets/icons/star.svg" />
              <img src="/../src/assets/icons/star.svg" />
              <img src="/../src/assets/icons/star.svg" /> |
              <span>5 Customer Review</span>
            </p>
            <p>{data.description}</p>
            <p>size</p>
            <span>
              <button className="size">L</button>
              <button className="size">XL</button>
              <button className="size">XS</button>
            </span>
            <p>Color</p>
            <div className="product-color">
              <button className="color" />
              <button className="color" />
              <button className="color" />
            </div>
            <div className="product-quantity">
              <button className="btn">- 1 +</button>
              <button className="btn">
                <a
                  href="checkout.html"
                  style={{ textDecoration: "none", color: "rgba(0, 0, 0, 1)" }}
                >
                  Add to cart
                </a>
              </button>
              <button className="btn">+ Compare</button>
            </div>
            <hr />
            <div className="product-contact">
              <span>SKU : SS001</span> <br />
              <br />
              <span>Category :sofas</span>
              <br />
              <br />
              <span>Tags :Sofa, Chair, Home, Shop</span>
              <br />
              <br />
              <span>
                Share : <img src="./assets/icons/facebook.svg" />
                <img src="./assets/icons/in.svg" />
                <img src="./assets/icons/twitter.svg" />
              </span>
            </div>
          </div>
        </section>
        {/* <section className="description">
          <div className="link-des">
            <a href="#">Description</a>
            <a href="#">Additional Information</a>
            <a href="#">Reviews [5]</a>
          </div>
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.{" "}
            <br />
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
          <div className="img-product-des">
            <img src="./assets/sofa1.svg" />
            <img src="./assets/sofa2.svg" />
          </div>
        </section> */}
        <hr style={{ opacity: "0.5" }} />
      </div>
    </div>
  );
};

export default DetailProduct;
