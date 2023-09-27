import { getProduct } from "@/api/controllers/getProduct";
import { getProducts } from "@/api/controllers/getProducts";
import { ProductInfo } from "@/components/ProductInfo/ProductInfo";
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
      <Link href={"/"}>
        <button
          type='button'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        >
          Back
        </button>
      </Link>
      <ProductInfo product={product} />
    </div>
  );
}
