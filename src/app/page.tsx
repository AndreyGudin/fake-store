import { getProduct } from "@/api/controllers/getProduct";
import { Products } from "@/components/Products/Products";

export default function Home() {
  return (
    <main className='text-3xl'>
      <Products />
    </main>
  );
}
