import { memo } from "react";
import type { FC } from "react";

interface CreateProductProps {
  className?: string;
}

export const CreateProduct: FC<CreateProductProps> = ({
  className = "",
}: CreateProductProps) => {
  return <div className={`$ {className}`}></div>;
};
