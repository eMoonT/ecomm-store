"use client";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push('/cart')}
        className="px-4 py-2 flex items-center rounded-full bg-black"
      >
        <ShoppingBag size={20} color="white" />
        <p className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </p>
      </Button>
    </div>
  );
};

export default NavbarActions;
