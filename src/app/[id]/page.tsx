import { getProduct } from "@/api/controllers/getProduct";
import { getProducts } from "@/api/controllers/getProducts";
import Link from "next/link";

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    id: String(product.id),
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  return (
    <div>
      <Link href={"/"}>Back</Link>
      {JSON.stringify(product)}
    </div>
  );
}
