import { Banner, Blog, New, Services, Shop } from "@/components";

const HomePage = () => {
  return (
    <>
      <Banner />
      <New />
      <div className="container">
        <hr />
      </div>
      <Shop />
      <Blog />
      <Services />
    </>
  );
};

export default HomePage;
