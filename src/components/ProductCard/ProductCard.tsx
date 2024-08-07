import { useCallback, type FC } from "react";
import { ProductSchema } from "@/types/ProductSchema";
import Link from "next/link";
import { Button } from "@/components/Button";
import { TrashIcon } from "lucide-react";
import { useDeleteProduct } from "@/hooks/useDeleteProduct";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/AlertDiablog";
import Image from "next/image";

const bufferImage =
  "https://www.clipartkey.com/mpngs/m/130-1309314_missing-clipart.png";

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
    mutation.mutate(product.id);
  }, [mutation, product.id]);

  return (
    <div
      className={`${className} w-[500px]  flex flex-col gap-4 border border-black items-center p-3 h-fit`}
    >
      <AlertDialog>
        <AlertDialogTrigger className='self-end'>
          <TrashIcon />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Вы уверены?</AlertDialogTitle>
            <AlertDialogDescription>
              Это действие удалит продукт
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Отменить</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Продолжить
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <img
        src={product.image ?? bufferImage}
        alt={product.title}
        width={400}
        height={400}
        loading='lazy'
        className='max-h-[530px]'
      />
      <span>{product.title}</span>
      <span>{`${product.price} $`}</span>
      <span className='w-11/12 max-h-[180px] overflow-hidden'>
        {product.description}
      </span>

      <Link href={`/${product.id}`}>
        <Button variant={"secondary"}>Больше</Button>
      </Link>
    </div>
  );
};
