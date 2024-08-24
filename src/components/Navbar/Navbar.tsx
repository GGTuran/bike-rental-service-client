/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import HomeIcon from "@/assets/icons/HomeIcon";
import MountainIcon from "@/assets/icons/MountainIcon";
import MenuIcon from "@/assets/icons/MenuIcon";
import XIcon from "@/assets/icons/XIIcon";
import PackageIcon from "@/assets/icons/PackageIcon";
import InfoIcon from "@/assets/icons/InfoIcon";
import ShoppingCartIcon from "@/assets/icons/ShoppingCartIcon";
import MailIcon from "@/assets/icons/MailIcon";

const Navbar = () => {
  return (
    <header className="bg-background   text-foreground shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center">
          <MountainIcon className="h-6 w-6 text-primary" />
          <span>Home Of Sports</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </a>
          <a
            href="/products"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            All Products
          </a>

          <a
            href="/manage-products"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Manage Products
          </a>

          <a
            href="/cart"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Cart
          </a>
          <a
            href="/about-us"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About Us
          </a>
          <a
            href="contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </a>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs">
            <div className="flex h-16 items-center justify-between px-4">
              <a href="/" className="flex items-center">
                <MountainIcon className="h-6 w-6 text-primary" />
                <span className="sr-only">Home Of Sports</span>
              </a>
              <SheetClose asChild>
                <Button variant="ghost" size="icon">
                  <XIcon className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </SheetClose>
            </div>
            <nav className="grid gap-4 px-4 py-6">
              <a
                href="/"
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
              >
                <HomeIcon className="h-5 w-5" />
                Home
              </a>
              <a
                href="/products"
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
              >
                <PackageIcon className="h-5 w-5" />
                All Products
              </a>

              <a
                href="manage-products"
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
              >
                <PackageIcon className="h-5 w-5" />
                Manage Products
              </a>

              <a
                href="/cart"
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
              >
                <ShoppingCartIcon className="h-5 w-5" />
                Cart
              </a>
              <a
                href="/about-us"
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
              >
                <InfoIcon className="h-5 w-5" />
                About Us
              </a>
              <a
                href="/contact"
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
              >
                <MailIcon className="h-5 w-5" />
                Contact
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
