import React from "react";
// Utils
import Link from "next/link";
import Image from "next/image";
// Components
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
// Icons
import { 
  FaGithub, 
  FaLinkedin, 
  FaXTwitter 
} from "react-icons/fa6";
// Logo
import nwlogo from "@/public/nw_logo.svg";

export default function Navigation () {

  return (
    <nav
      className="
        w-full 
        flex 
        bg-background/50 
        backdrop-blur-sm
        border-b
        border-zinc-500/20 
        fixed 
        top-0 
        left-0 
        right-0 
        z-50
      "
    >
      <div
        className="
          w-full 
          max-w-5xl 
          mx-auto 
          py-2
          px-4 
          lg:px-0
          flex 
          justify-between 
          items-center
        "
      >
        <Link href="/">
          <Image
            src={nwlogo}
            alt="Nils Westgardh Logo"
            width={60}
            height={48}
            className="cursor-pointer"
          />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/">
                <Button variant="ghost">
                  Projects
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about">
                <Button variant="ghost">
                  About
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/connect">
                <Button variant="ghost">
                  Connect
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost" 
            size="icon" 
            asChild
          >
            <a 
              href="https://linkedin.com/in/nilswestgardh" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost" 
            size="icon" 
            asChild
          >
            <a
              href="https://github.com/nilswestgardh" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost" 
            size="icon" 
            asChild
          >
            <a
              href="https://x.com/nilswestgardh" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaXTwitter className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};