import Link from "next/link";
import { Button } from "@/components/Button";
import { CreateProduct } from "@/components/CreateProduct";

export default function Create() {
  return (
    <main className='text-3xl flex flex-col justify-center items-center'>
      <Link href={"/products"} className='self-start'>
        <Button variant={"secondary"}>Back</Button>
      </Link>
      <CreateProduct />
    </main>
  );
}
