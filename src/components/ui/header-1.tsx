"use client";

import { useState, useEffect, ComponentProps } from "react";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

const openChat = () => window.dispatchEvent(new Event("openDayanaChat"));
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import Image from "next/image";
import { createPortal } from "react-dom";
import Logo from "../../../public/logo.png";

export function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "CloudsForge", href: "/cloudsforge", icon: "/cloudsforge/logo.png" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
  ];

  useEffect(() => {
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
        "sticky top-[0px] z-50 w-full border-b border-border bg-background/15 backdrop-blur-lg",
      )}
    >
      <nav className="mx-auto flex h-14 w-full max-w-[1800px] items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 rounded-md p-2">
          <div className="flex items-center gap-4">
            <Image
              src={Logo}
              alt="Darjan.dev"
              width={140}
              height={140}
              className="h-6 w-9 ml-[-10px] scale-80"
              priority
            />
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
              {link.icon && (
                <Image
                  src={link.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="ml-2 h-5 w-5"
                />
              )}
            </Link>
          ))}
          <Button variant="outline" onClick={openChat}>
            <div className="flex items-center gap-3">
              Talk to Assistant
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "rgb(20, 255, 126)",
                }}
              />
            </div>
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
          <Button
            variant="outline"
            className="w-full bg-transparent"
            onClick={openChat}
          >
            Contact
          </Button>
          <Button className="w-full" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </MobileMenu>
    </header>
  );
}

type MobileMenuProps = ComponentProps<"div"> & {
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
