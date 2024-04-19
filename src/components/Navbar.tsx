"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-5 px-10 inset-x-0 max-w-2xl mx-auto z-50 ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Practice">
          <div className="flex flex-col space-y-4 text-sm ">
            <HoveredLink href="https://devflow-nextjs-prod.vercel.app/">
              DevFlow
            </HoveredLink>
            <HoveredLink href="https://ne-retreats.vercel.app/">
              NERetreats
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Project">
          <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
            <ProductItem
              title="DevFlow"
              href="https://devflow-nextjs-prod.vercel.app"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="A community-driven platform for asking and answering programming questions and collaborate with other developers"
            />
            <ProductItem
              title="NERetreats"
              href="https://ne-retreats.vercel.app"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="A full stack hotel booking and hosting site"
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
