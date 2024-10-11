import CategoryList from "@/components/CategoryList";
import Header from "@/components/Header";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <main className="bg-[#CCCCCC] flex justify-center ">
      <div className="bg-white">
        <Header />
        <CategoryList />
        <ProductList />
        <ProductDetail />
      </div>
    </main>
  );
}
