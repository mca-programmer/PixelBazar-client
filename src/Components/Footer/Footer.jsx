"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Heart
} from "lucide-react";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const socialVariants = {
    hover: { 
      scale: 1.15,
      rotate: 5,
      transition: { 
        type: "spring", 
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.9 }
  };

  const linkVariants = {
    hover: { 
      x: 5,
      color: "#ef4444",
      transition: { duration: 0.2 }
    }
  };

  const quickLinks = ["About", "Products", "Dashboard", "Contact"];
  const customerCare = ["Order Tracking", "Returns & Refunds", "Shipping Info", "Privacy Policy", "Terms & Conditions"];
  
  const socialMedia = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Logo & Description - Spans 4 columns */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <motion.div 
                className="relative w-12 h-12 lg:w-14 lg:h-14"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/logo.png"
                  alt="PixelBazar"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>
              <span className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent">
                PixelBazar
              </span>
            </Link>
            
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Your premier destination for cutting-edge products and unbeatable deals. Shop smarter, live better.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <motion.div 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-red-500" />
                <span>support@pixelbazar.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 text-red-500" />
                <span>+880 1234-567890</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 text-red-500" />
                <span>Dhaka, Bangladesh</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links - Spans 2 columns */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item, i) => (
                <motion.li key={i} variants={linkVariants} whileHover="hover">
                  <Link 
                    href={`/${item.toLowerCase().replace(/\s/g, "")}`}
                    className="text-gray-400 hover:text-white transition flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Care - Spans 3 columns */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Customer Care
            </h4>
            <ul className="space-y-3">
              {customerCare.map((item, i) => (
                <motion.li key={i} variants={linkVariants} whileHover="hover">
                  <Link 
                    href={`/${item.toLowerCase().replace(/\s/g, "")}`}
                    className="text-gray-400 hover:text-white transition flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter - Spans 3 columns */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Stay Updated
            </h4>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to get special offers, free giveaways, and exclusive deals.
            </p>
            
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg font-semibold text-sm shadow-lg hover:shadow-red-600/50 transition"
              >
                Subscribe
              </motion.button>
            </div>

            {/* Social Media Icons */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-4 text-gray-300">Follow Us</h5>
              <div className="flex gap-3">
                {socialMedia.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    variants={socialVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-br hover:from-red-600 hover:to-pink-600 rounded-full flex items-center justify-center border border-gray-700 hover:border-transparent transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider with Animation */}
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Footer Bottom */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500"
          variants={itemVariants}
        >
          <p className="flex items-center gap-2">
            © 2025 PixelBazar. Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.span>
            in Bangladesh
          </p>
          
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-white transition">
              Cookies
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll to Top Floating Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-red-600 to-pink-600 rounded-full shadow-2xl flex items-center justify-center z-40 hover:shadow-red-600/50 transition-all"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0 }}
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowRight className="w-6 h-6 text-white -rotate-90" />
      </motion.button>
    </footer>
  );
}