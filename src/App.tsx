import { Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutWebsite from "./components/LayoutWebsite";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import { Toaster } from "./components/ui/toaster";
import AboutPage from "./pages/about";
import ProductManagement from "./pages/admin/product";
import ProductAdd from "./pages/admin/product/add";
import ProductEditPage from "./pages/admin/product/edit";
import ContactPage from "./pages/contact";
import DetailProduct from "./pages/detail-product";
import HomePage from "./pages/home";
import NotfoundPage from "./pages/notfound";
import ShopPage from "./pages/shop";

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
      <Toaster />
    </>
  );
}

export default App;
