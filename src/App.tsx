import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import ShopPage from "./pages/shop";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import NotfoundPage from "./pages/notfound";
import LayoutWebsite from "./components/LayoutWebsite";
import DetailProduct from "./pages/detail-product";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import ProductManagement from "./pages/admin/product";
import ProductAdd from "./pages/admin/product/add";
import ProductEditPage from "./pages/admin/product/edit";

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
        <Route path="admin" element={<LayoutAdmin />}>
          <Route path="products" element={<ProductManagement />} />
          <Route path="products/add" element={<ProductAdd />} />
          <Route path="products/:id/edit" element={<ProductEditPage />} />
        </Route>
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </>
  );
}

export default App;
