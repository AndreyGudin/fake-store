import { getProduct } from "@/api/controllers/getProduct";
import { getProducts } from "@/api/controllers/getProducts";
import { Button } from "@/components/Button";
import { ProductInfo } from "@/components/ProductInfo/ProductInfo";
import Link from "next/link";

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    id: String(product.id),
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <main className='flex w-full min-h-screen justify-center items-center'>
      <Link className='self-start' href={"/products"}>
        <Button variant={"secondary"}>Back</Button>
      </Link>
      <ProductInfo id={params.id} />
    </main>
  );
}
