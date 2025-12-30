"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <motion.div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Logo & Description */}
        <motion.div variants={fadeUp}>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <Image
                src="/logo.png"
                alt="PixelBazar"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              PixelBazar
            </span>
          </Link>
          <p className="text-gray-400">Online shopping destination</p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeUp} whileHover={{ scale: 1.05 }}>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            {["About", "Contact", "FAQ"].map((item, i) => (
              <li key={i}>
                <Link href={`/${item.toLowerCase().replace(/\s/g, "")}`} className="hover:text-white transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Customer Care */}
        <motion.div variants={fadeUp} whileHover={{ scale: 1.05 }}>
          <h4 className="font-bold mb-4">Customer Care</h4>
          <ul className="space-y-2 text-gray-400">
            {["Returns", "Shipping Info", "Privacy Policy"].map((item, i) => (
              <li key={i}>
                <Link href={`/${item.toLowerCase().replace(/\s/g, "")}`} className="hover:text-white transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Follow Us */}
        <motion.div variants={fadeUp} whileHover={{ scale: 1.05 }}>
          <h4 className="font-bold mb-4">Follow Us</h4>
          <p className="text-gray-400">Stay connected for latest deals</p>
        </motion.div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        className="text-center text-gray-500 mt-10 border-t border-gray-800 pt-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        © 2026 PixelBazar Cart. All rights reserved.
      </motion.div>
    </footer>
  );
}
