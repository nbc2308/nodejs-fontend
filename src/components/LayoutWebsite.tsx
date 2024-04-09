import { Outlet } from "react-router-dom";
import { Footer, Header } from ".";

const LayoutWebsite = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutWebsite;
