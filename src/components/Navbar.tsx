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
import { Button } from "@/components/ui/moving-border";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  const downloadResume = () => {
    const resumeUrl =
      "https://drive.usercontent.google.com/download?id=1cO22xlGIZ7zu4M3HMo-Ka9G6aBCpFK48&export=download"; // Replace this with your Google Drive link
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

        {/* <MenuItem setActive={setActive} active={active} item="Practice">
          <div className="flex flex-col space-y-4 text-sm ">
            <HoveredLink href="https://devflow-nextjs-prod.vercel.app/">
              DevFlow
            </HoveredLink>
            <HoveredLink href="https://ne-retreats.vercel.app/">
              NERetreats
            </HoveredLink>
          </div>
        </MenuItem> */}
        <MenuItem setActive={setActive} active={active} item="Project">
          <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
            <ProductItem
              title="DevFlow"
              href="https://devflow-nextjs-prod.vercel.app"
              src="/image/devflow.jpeg"
              description="A community-driven platform for asking and answering programming questions and collaborate with other developers"
            />
            <ProductItem
              title="NERetreats"
              href="https://ne-retreats.vercel.app"
              src="/image/NERetreats.png"
              description="A full stack hotel booking and hosting site"
            />
          </div>
        </MenuItem>
        <Link href="#" onClick={downloadResume}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Resume"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
