import React from "react";
import {
  Phone,
  MailCheck,
  Clock2,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

function TopBar() {
  return (
    <div className="relative z-50 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        {/* LEFT */}
        <div className="flex items-center justify-center md:justify-start gap-4">
          <a
            href="tel:+919667316333"
            className="flex items-center gap-2 hover:text-teal-200 transition"
          >
            <Phone className="w-4 h-4 text-cyan-300" />
            +91 9667316333
          </a>

          <span className="hidden md:inline">|</span>

          <a
            href="mailto:info@dreams4u.in"
            className="flex items-center gap-2 hover:text-teal-200 transition"
          >
            <MailCheck className="w-4 h-4 text-cyan-300" />
            info@dreams4u.in
          </a>
        </div>

        {/* CENTER */}
        <div className="text-center font-medium flex items-center justify-center md:justify-start gap-4 mx-auto">
          <Clock2 className="w-4 h-4 text-cyan-300" />
          Mon - Sat: 9 am - 7 pm
        </div>

        {/* RIGHT */}
        <div className="justify-center md:justify-end gap-3 hidden md:flex">
          <a
            href="#"
            className="bg-cyan-300 hover:bg-cyan-500 text-violet-950 p-2 rounded-full transition"
          >
            <Facebook className="w-4 h-4" />
          </a>

          <a
            href="#"
            className="bg-cyan-300 hover:bg-cyan-500 text-violet-950 p-2 rounded-full transition"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="bg-cyan-300 hover:bg-cyan-500 text-violet-950 p-2 rounded-full transition"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
