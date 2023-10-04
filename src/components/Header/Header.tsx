"use client";

import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
import { useIsAuthStore } from "@/hooks/store/useIsAuthStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { memo, useCallback } from "react";
import type { FC } from "react";

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = memo(function Header({
  className = "",
}: HeaderProps) {
  const isAuth = useIsAuthStore((state) => state.isAuth);
  const router = useRouter();

  const handleLogOut = useCallback(() => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    console.log(process.env.NEXT_PUBLIC_TOKEN);
    router.push("/login");
  }, [router]);

  return (
    <menu
      className={`${className} h-[100px] w-full flex justify-between items-center`}
    >
      <Link href={"/create"}>
        <Button variant={"default"}>Create product</Button>
      </Link>
      {isAuth && (
        <div className='flex gap-4 items-center'>
          <Label> You are authenticated</Label>
          <Link href={"/login"}>
            <Button onClick={handleLogOut} variant={"destructive"}>
              Log out
            </Button>
          </Link>
        </div>
      )}
    </menu>
  );
});
