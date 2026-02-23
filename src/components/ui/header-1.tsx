"use client";
import React from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { useScroll } from "@/components/ui/use-scroll";
import Image from "next/image";
import { createPortal } from "react-dom";
import Logo from "../../../public/logo.png";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  const links = [
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ];

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-[0px] z-50 w-full border-b border-transparent bg-white/0 ",
        {
          "bg-background/15 backdrop-blur-lg border-border": scrolled,
        },
      )}
    >
      <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="hover:bg-accent flex items-center gap-2 rounded-md p-2"
        >
          <div className="flex items-center gap-4">
            <Image
              src={Logo}
              alt="Darjan.dev"
              width={140}
              height={32}
              className="h-8 w-auto ml-[-5px] scale-80"
              priority
            />
            <p className="pt-1 opacity-30">Darjan.dev</p>
          </div>
        </Link>
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              className={buttonVariants({ variant: "ghost" })}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="outline" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>
      <MobileMenu open={open} className="flex flex-col justify-between gap-2">
        <div className="grid gap-y-2">
          {links.map((link) => (
            <Link
              key={link.label}
              className={buttonVariants({
                variant: "ghost",
                className: "justify-start",
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <Button variant="outline" className="w-full bg-transparent" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <Button className="w-full" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </MobileMenu>
    </header>
  );
}

type MobileMenuProps = React.ComponentProps<"div"> & {
  open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  if (!open || typeof window === "undefined") return null;

  return createPortal(
    <div
      id="mobile-menu"
      className={cn(
        "bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg",
        "fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden",
      )}
    >
      <div
        data-slot={open ? "open" : "closed"}
        className={cn(
          "data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out",
          "size-full p-4",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

export const WordmarkIcon = (props: React.ComponentProps<"svg">) => (
  <svg
    viewBox="0 0 88 16"
    fill="currentColor"
    aria-label="darjan.dev"
    {...props}
  >
    <text
      x="0"
      y="13"
      fontSize="13"
      fontWeight="600"
      fontFamily="inherit"
      letterSpacing="-0.3"
    >
      Darjan.dev
    </text>
  </svg>
);
