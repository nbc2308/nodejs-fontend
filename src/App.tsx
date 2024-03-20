import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import ShopPage from "./pages/shop";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import NotfoundPage from "./pages/notfound";
import LayoutWebsite from "./components/LayoutWebsite";
import DetailProduct from "./pages/detail-product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="product/:id" element={<DetailProduct />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
