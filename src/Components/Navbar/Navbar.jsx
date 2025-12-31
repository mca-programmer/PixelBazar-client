"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
  PlusCircle,
  Package,
  LogOut,
  ChevronDown,
  Settings,
  Heart,
  Bell,
} from "lucide-react";
import { useAuth } from "@/Context/AuthContext";
import { useCart } from "@/Context/CartContext";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLoginClick = () => {
    const redirectTo = encodeURIComponent(
      pathname === "/" ? "/dashboard" : pathname
    );
    router.push(`/login?redirect=${redirectTo}`);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-2xl border-b-2 border-red-100"
            : "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group relative z-10">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <Image
                  src="/logo.png"
                  alt="PixelBazar"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
              <span className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-red-600 via-pink-600 to-red-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                PixelBazar
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm xl:text-base font-semibold transition-all duration-300 rounded-lg ${
                      isActive 
                        ? "text-red-600" 
                        : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-red-600 to-pink-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              
              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2.5 xl:p-3 hover:bg-gradient-to-br hover:from-red-50 hover:to-pink-50 rounded-full transition-all duration-300 group relative"
              >
                <Search className="w-5 h-5 text-gray-700 group-hover:text-red-600 transition-colors" />
              </button>

              {/* Notifications */}
              <button className="relative p-2.5 xl:p-3 hover:bg-gradient-to-br hover:from-red-50 hover:to-pink-50 rounded-full transition-all duration-300 group">
                <Bell className="w-5 h-5 text-gray-700 group-hover:text-red-600 transition-colors" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              </button>

              {/* Cart */}
              <Link href="/cart">
                <div className="relative p-2.5 xl:p-3 hover:bg-gradient-to-br hover:from-red-50 hover:to-pink-50 rounded-full transition-all duration-300 group cursor-pointer">
                  <ShoppingCart className="w-5 h-5 text-gray-700 group-hover:text-red-600 transition-colors" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gradient-to-br from-red-600 to-pink-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      {totalItems}
                    </span>
                  )}
                </div>
              </Link>

              {/* User Section */}
              {currentUser ? (
                <div className="relative group">
                  <button className="flex items-center gap-2 px-2 xl:px-3 py-2 hover:bg-gradient-to-br hover:from-red-50 hover:to-pink-50 rounded-full transition-all duration-300">
                    <div className="w-9 h-9 bg-gradient-to-br from-red-600 via-pink-600 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg ring-2 ring-red-100">
                      {currentUser.displayName?.[0] || currentUser.email[0].toUpperCase()}
                    </div>
                    <div className="text-left hidden xl:block">
                      <p className="text-sm font-semibold text-gray-800 leading-tight max-w-[100px] truncate">
                        {currentUser.displayName || currentUser.email.split("@")[0]}
                      </p>
                      <p className="text-xs text-gray-500">My Account</p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-500 group-hover:rotate-180 transition-transform duration-300" />
                  </button>

                  {/* Dropdown */}
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right scale-95 group-hover:scale-100">
                    <div className="p-4 bg-gradient-to-br from-red-50 via-pink-50 to-red-50 border-b">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                          {currentUser.displayName?.[0] || currentUser.email[0].toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-gray-900 truncate">
                            {currentUser.displayName || "Seller"}
                          </p>
                          <p className="text-sm text-gray-600 truncate">{currentUser.email}</p>
                        </div>
                      </div>
                    </div>

                    <div className="py-2">
                      {[
                        { icon: User, label: "My Dashboard", href: "/dashboard" },
                        { icon: PlusCircle, label: "Add Product", href: "/dashboard/add-product" },
                        { icon: Package, label: "Manage Products", href: "/dashboard/manage-products" },
                        { icon: Heart, label: "Wishlist", href: "/dashboard/wishlist" },
                        { icon: Settings, label: "Settings", href: "/dashboard/settings" },
                      ].map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 transition-all group/item"
                        >
                          <item.icon className="w-5 h-5 text-red-600" />
                          <span className="font-medium text-gray-700 group-hover/item:text-red-600 transition-colors">
                            {item.label}
                          </span>
                        </Link>
                      ))}
                    </div>

                    <div className="border-t">
                      <button
                        onClick={logout}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-red-600 font-semibold transition-colors"
                      >
                        <LogOut className="w-5 h-5" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={handleLoginClick}
                  className="px-5 xl:px-6 py-2 xl:py-2.5 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:shadow-red-600/50 transition-all duration-300 active:scale-95 text-sm xl:text-base relative overflow-hidden group"
                >
                  <span className="relative z-10">Login</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-3 hover:bg-gradient-to-br hover:from-red-50 hover:to-pink-50 rounded-full transition-all duration-300 relative active:scale-95"
            >
              <Menu className="w-6 h-6 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse ring-2 ring-white" />
              )}
            </button>
          </div>
        </div>

        {/* Search Dropdown */}
        <div
          className={`border-t border-gray-200 overflow-hidden transition-all duration-300 ${
            searchOpen ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, categories..."
                className="w-full pl-12 pr-4 py-3 bg-gradient-to-r from-gray-50 to-red-50/30 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                autoFocus={searchOpen}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            style={{
              animation: "fadeIn 0.3s ease-out"
            }}
          />

          {/* Sidebar */}
          <div
            className="absolute left-0 top-0 bottom-0 w-80 sm:w-96 bg-white shadow-2xl overflow-y-auto"
            style={{
              animation: "slideInLeft 0.3s ease-out"
            }}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b bg-gradient-to-r from-red-50 via-pink-50 to-red-50 backdrop-blur-lg">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <Image src="/logo.png" alt="PixelBazar" fill className="object-contain" />
                </div>
                <span className="text-2xl font-black bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  PixelBazar
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/50 rounded-full transition-colors active:scale-90"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-6 space-y-2">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg shadow-red-600/30"
                        : "text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 hover:text-red-600 active:scale-95"
                    }`}
                    style={{
                      animation: `slideInLeft 0.3s ease-out ${i * 0.1}s backwards`
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Cart */}
              <Link
                href="/cart"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-3 px-4 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 hover:text-red-600 font-medium transition-all duration-300 active:scale-95"
                style={{
                  animation: `slideInLeft 0.3s ease-out ${navItems.length * 0.1}s backwards`
                }}
              >
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-5 h-5" />
                  <span>My Cart</span>
                </div>
                {totalItems > 0 && (
                  <span className="bg-gradient-to-r from-red-600 to-pink-600 text-white text-sm px-3 py-1 rounded-full font-bold shadow-lg">
                    {totalItems}
                  </span>
                )}
              </Link>
            </nav>

            {/* User Section */}
            <div className="px-6 pb-6 space-y-3">
              {currentUser ? (
                <>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-red-50 via-pink-50 to-red-50 rounded-2xl border-2 border-red-100 shadow-inner">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg ring-2 ring-white">
                      {currentUser.displayName?.[0] || currentUser.email[0].toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 truncate">
                        {currentUser.displayName || "Seller"}
                      </p>
                      <p className="text-sm text-gray-600 truncate">{currentUser.email}</p>
                    </div>
                  </div>

                  {[
                    { icon: PlusCircle, label: "Add Product", href: "/dashboard/add-product" },
                    { icon: Package, label: "Manage Products", href: "/dashboard/manage-products" },
                    { icon: Heart, label: "Wishlist", href: "/dashboard/wishlist" },
                  ].map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 py-3 px-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 rounded-xl transition-all group active:scale-95"
                    >
                      <item.icon className="w-5 h-5 text-red-600" />
                      <span className="font-medium text-gray-700 group-hover:text-red-600 transition-colors">
                        {item.label}
                      </span>
                    </Link>
                  ))}

                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-red-50 hover:bg-red-100 text-red-600 font-semibold rounded-xl transition-colors active:scale-95"
                  >
                    <LogOut className="w-5 h-5" />
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      handleLoginClick();
                    }}
                    className="w-full py-4 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-red-600/50 transition-all duration-300 active:scale-95"
                  >
                    Login
                  </button>
                  <Link
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className="block text-center py-4 border-2 border-red-600 text-red-600 font-bold rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 transition-all duration-300 active:scale-95"
                  >
                    Create Account
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
}