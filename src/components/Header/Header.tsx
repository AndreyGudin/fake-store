import { memo } from "react";
import type { FC } from "react";

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = memo(function Header({
  className = "",
}: HeaderProps) {
  return (
    <menu className={`${className} h-[100px] w-full`}>
      <button>Create product</button>
    </menu>
  );
});
