"use client";

import { Button } from "@/components/Button";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { memo } from "react";
import type { FC } from "react";

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = memo(function Header({
  className = "",
}: HeaderProps) {
  const queryClient = useQueryClient();

  return (
    <menu className={`${className} h-[100px] w-full`}>
      <Link href={"/create"}>
        <Button variant={"default"}>Create product</Button>
      </Link>
    </menu>
  );
});
