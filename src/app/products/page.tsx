import { getProduct } from "@/api/controllers/getProduct";
import { Header } from "@/components/Header";
import { Products } from "@/components/Products/Products";

export default function Home() {
  return (
    <main className='text-3xl'>
      <Header />
      <Products />
    </main>
  );
}
