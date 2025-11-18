"use client"

import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#c5a47e]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-xs text-gray-400 tracking-widest uppercase">
              &copy; 2025 GLOBAL APEX. ALL RIGHTS RESERVED.
            </p>

            {/* Social Links */}
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#c5a47e] transition transform hover:scale-110 duration-300">
                <Instagram size={16} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#c5a47e] transition transform hover:scale-110 duration-300">
                <Twitter size={16} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#c5a47e] transition transform hover:scale-110 duration-300">
                <Facebook size={16} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#c5a47e] transition transform hover:scale-110 duration-300">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}