import CategoryList from "@/components/CategoryList";
import Header from "@/components/Header";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <main className="md:bg-[#CCCCCC] flex md:justify-center relative">
      <div className="md:bg-white">
        <Header />
        <CategoryList />
        <ProductList />
        <ProductDetail />
      </div>
      <Cart></Cart>
    </main>
  );
}
