import { useCallback, type FC } from "react";
import { ProductSchema } from "@/types/ProductSchema";
import Link from "next/link";
import { Button } from "@/components/Button";
import { TrashIcon } from "lucide-react";
import { useDeleteProduct } from "@/hooks/useDeleteProduct";

interface ProductCardProps {
  className?: string;
  product: ProductSchema;
}

export const ProductCard: FC<ProductCardProps> = ({
  product,
  className = "",
}: ProductCardProps) => {
  const mutation = useDeleteProduct();

  const handleDelete = useCallback(() => {
    console.log("delete");
    mutation.mutate(product.id);
  }, [mutation, product.id]);

  return (
    <div
      className={`${className} w-[500px]  flex flex-col gap-4 border border-black items-center p-3 h-fit`}
    >
      <Button onClick={handleDelete} className='self-end' variant={"outline"}>
        <TrashIcon />
      </Button>

      <img
        src={product.image}
        alt={product.title}
        className='w-[400px]'
        loading='lazy'
      />
      <span>{product.title}</span>
      <Link href={`/${product.id}`}>
        <Button variant={"secondary"}>More</Button>
      </Link>
    </div>
  );
};
