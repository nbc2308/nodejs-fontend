import { Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutWebsite from "./components/LayoutWebsite";
import { Toaster } from "./components/ui/toaster";
import AboutPage from "./pages/website/about";
import ProductManagement from "./pages/admin/product/pages";
import ProductAdd from "./pages/admin/product/_components/add";
import ProductEditPage from "./pages/admin/product/_components/edit";
import ContactPage from "./pages/website/contact";
import DetailProduct from "./pages/website/detail-product";
import HomePage from "./pages/website/home";
import NotfoundPage from "./pages/website/notfound";
import ShopPage from "./pages/website/shop";
import LayoutAdmin from "./pages/admin/LayoutAdmin";

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
