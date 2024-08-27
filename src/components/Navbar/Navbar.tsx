import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import MountainIcon from "@/assets/icons/MountainIcon";
import MenuIcon from "@/assets/icons/MenuIcon";
import XIcon from "@/assets/icons/XIIcon";
import InfoIcon from "@/assets/icons/InfoIcon";
import MailIcon from "@/assets/icons/MailIcon";
import MoonIcon from "@/assets/icons/MoonIcon";
import SunIcon from "@/assets/icons/SunIcon";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  logout,
  selectCurrentUser,
  useCurrentToken,
} from "@/redux/features/auth/authSlice";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const Navbar = () => {
  const { theme, setTheme } = useTheme(); // Destructure theme and setTheme
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);
  const token = useAppSelector(useCurrentToken);

  const handleLogout = () => {
    dispatch(logout());
  };

  // Toggle dark mode using setTheme function
  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="bg-background text-foreground shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center">
          <MountainIcon className="h-6 w-6 text-primary" />
          <span>Home Of Bikes</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {/* Common Links */}
          <a
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </a>
          <a
            href="/about-us"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </a>

          {/* Conditional Links Based on Role */}
          {user && user.role === "admin" && (
            <>
              <a
                href="/get-me"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Profile
              </a>
              <a
                href="/admin/manage-bikes"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Manage Bikes
              </a>
              <a
                href="/admin/user-management"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Users
              </a>
              <a
                href="/admin/booking-management"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                All Bookings
              </a>
            </>
          )}
          {user && user.role === "user" && (
            <>
              <a
                href="/get-me"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                User Dashboard
              </a>
              <a
                href="/users/all-bikes"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Bikes
              </a>
              <a
                href="/users/my-rentals"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Bookings
              </a>
            </>
          )}

          {/* Authentication Links */}
          {token ? (
            <button
              onClick={handleLogout}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Logout
            </button>
          ) : (
            <>
              <a
                href="/login"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Login
              </a>
              <a
                href="/signup"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Sign Up
              </a>
            </>
          )}
          <button
            onClick={toggleDarkMode}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {theme === "dark" ? (  // Determine icon based on current theme
              <MoonIcon className="h-5 w-5" />
            ) : (
              <SunIcon className="h-5 w-5" />
            )}
          </button>
        </nav>
        {/* Mobile Menu */}
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
                <span className="sr-only">Home Of Bikes</span>
              </a>
              <SheetClose asChild>
                <Button variant="ghost" size="icon">
                  <XIcon className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </SheetClose>
            </div>
            <nav className="grid gap-4 px-4 py-6">
              {/* Common Links */}
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

              {/* Conditional Links Based on Role */}
              {user && user.role === "admin" && (
                <>
                  <a
                    href="/get-me"
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                  >
                    Admin Dashboard
                  </a>
                  <a
                    href="/admin/manage-bikes"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Manage Bikes
                  </a>
                  <a
                    href="/admin/user-management"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Users
                  </a>
                  <a
                    href="/admin/booking-management"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    All Bookings
                  </a>
                </>
              )}
              {user && user.role === "user" && (
                <>
                  <a
                    href="/get-me"
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                  >
                    User Dashboard
                  </a>
                  <a
                    href="/users/all-bikes"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Bikes
                  </a>
                  <a
                    href="/users/my-rentals"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Bookings
                  </a>
                </>
              )}

              {/* Authentication Links */}
              {token ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                >
                  Logout
                </button>
              ) : (
                <>
                  <a
                    href="/login"
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                  >
                    Login
                  </a>
                  <a
                    href="/signup"
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                  >
                    Sign Up
                  </a>
                </>
              )}
              <button
                onClick={toggleDarkMode}
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
              >
                {theme === "dark" ? (
                  <MoonIcon className="h-5 w-5" />
                ) : (
                  <SunIcon className="h-5 w-5" />
                )}
              </button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
