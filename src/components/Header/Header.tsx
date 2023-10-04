"use client";

import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
import { useIsAuthStore } from "@/hooks/store/useIsAuthStore";
import Link from "next/link";
import { memo } from "react";
import type { FC } from "react";

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = memo(function Header({
  className = "",
}: HeaderProps) {
  const isAuth = useIsAuthStore((state) => state.isAuth);

  return (
    <menu className={`${className} h-[100px] w-full`}>
      <Link href={"/create"}>
        <Button variant={"default"}>Create product</Button>
      </Link>
      {isAuth && <Label> You are authenticated</Label>}
    </menu>
  );
});
