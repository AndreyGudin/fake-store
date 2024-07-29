import { Button } from "@/components/Button";
import { ProductInfo } from "@/components/ProductInfo/ProductInfo";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <main className='flex w-full min-h-screen justify-center items-center'>
      <Link className='self-start' href={"/products"}>
        <Button variant={"secondary"}>Назад</Button>
      </Link>
      <ProductInfo id={params.id} />
    </main>
  );
}
