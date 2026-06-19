import {
  ChevronRight,
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

const priorityServices = [
  ["Website Design in Faridabad", "/website-design-company-in-faridabad"],
  ["Web Development in Faridabad", "/website-development-company-in-faridabad"],
  ["Ecommerce Website Development", "/ecommerce-website-development-in-faridabad"],
  ["WordPress Development", "/wordpress-development-in-faridabad"],
  ["Custom Website Development", "/custom-website-development-in-faridabad"],
  ["Website Redesign", "/website-redesign-services-in-faridabad"],
  ["Landing Page Design", "/landing-page-design-services-in-faridabad"],
  ["Website Maintenance", "/website-maintenance-services-in-faridabad"],
];

const companyLinks = [
  ["About Dreams4u", "/about-dreams4u"],
  ["Portfolio", "/portfolio"],
  ["Case Studies", "/case-studies"],
  ["Blog", "/blog"],
  ["Service Areas", "/works"],
  ["Contact", "/contact"],
  ["All Website Pages", "/sitemap"],
];

const socialLinks = [
  {
    name: "YouTube",
    href: "https://youtu.be/jfJ1U1JIKjk",
    icon: Youtube,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/ak.karan.2818/",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dreams4u.in/",
    icon: Instagram,
  },
  {
    name: "GitHub",
    href: "https://github.com/ak-karan",
    icon: Github,
  },
];

function FooterLink({ name, path }) {
  return (
    <Link
      to={path}
      className="group flex items-start gap-2 text-sm leading-6 text-slate-300 hover:text-cyan-300"
    >
      <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-cyan-500 transition group-hover:translate-x-0.5" />
      {name}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.1fr_1fr_1fr_1.05fr]">
          <div>
            <Link to="/" aria-label="Dreams4u home">
              <img
                src="/images/bottom-logo.webp"
                alt="Dreams4u"
                width="907"
                height="275"
                loading="lazy"
                decoding="async"
                className="h-auto w-48"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Website design, development, ecommerce, SEO, redesign, landing
              pages, and maintenance for businesses in Faridabad, Delhi NCR,
              and across India.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  title={name}
                  className="inline-flex h-10 w-10 items-center justify-center border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
              <a
                href="https://in.pinterest.com/dreams4uu/website-design/"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                title="Pinterest"
                className="inline-flex h-10 w-10 items-center justify-center border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-300"
              >
                <FaPinterest className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-base font-semibold">Priority Services</h2>
            <nav className="mt-5 space-y-2" aria-label="Priority services">
              {priorityServices.map(([name, path]) => (
                <FooterLink key={path} name={name} path={path} />
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-base font-semibold">Company and Resources</h2>
            <nav className="mt-5 space-y-2" aria-label="Company links">
              {companyLinks.map(([name, path]) => (
                <FooterLink key={path} name={name} path={path} />
              ))}
              <a
                href="/llms.txt"
                className="group flex items-start gap-2 text-sm leading-6 text-slate-300 hover:text-cyan-300"
              >
                <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-cyan-500" />
                AI resource file
              </a>
            </nav>
          </div>

          <div>
            <h2 className="text-base font-semibold">Contact Dreams4u</h2>
            <address className="mt-5 space-y-5 not-italic text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                <span>
                  1361, Bhagat Singh Colony, Sector 4, Ballabgarh, Faridabad,
                  Haryana 121004
                </span>
              </div>
              <a
                href="tel:+919667316333"
                className="flex items-center gap-3 hover:text-cyan-300"
              >
                <Phone className="h-5 w-5 text-cyan-400" />
                +91 96673 16333
              </a>
              <a
                href="mailto:info@dreams4u.in"
                className="flex items-center gap-3 hover:text-cyan-300"
              >
                <Mail className="h-5 w-5 text-cyan-400" />
                info@dreams4u.in
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Dreams4u. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/privacy" className="hover:text-cyan-300">Privacy</Link>
            <Link to="/terms" className="hover:text-cyan-300">Terms</Link>
            <Link to="/cookies" className="hover:text-cyan-300">Cookies</Link>
            <Link to="/sitemap" className="hover:text-cyan-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
