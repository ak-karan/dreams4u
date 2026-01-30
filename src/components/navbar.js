import {
  Monitor,
  Code,
  Search,
  ShoppingCart,
  Smartphone,
  Globe,
  Palette,
  MessageCircle,
  Wrench,
  Smartphone as AppIcon,
  TrendingUp,
} from "lucide-react";

export const services = [
  {
    path: "/services/web-development",
    name: "Web Development",
    icon: Code,
    description: "Custom website development",
  },
  {
    path: "/services/website-design",
    name: "Website Design",
    icon: Monitor,
    description: "Professional website design",
  },
  {
    path: "/services/search-engine-optimization",
    name: "SEO Optimization",
    icon: Search,
    description: "Search engine optimization",
  },
  {
    path: "/services/digital-marketing",
    name: "Digital Marketing",
    icon: TrendingUp,
    description: "Digital marketing services",
  },
  {
    path: "/services/annual-maintenance",
    name: "Annual Maintenance",
    icon: Wrench,
    description: "Website maintenance & support",
  },
  {
    path: "/services/app-development",
    name: "App Development",
    icon: AppIcon,
    description: "Mobile app development",
  },
  {
    path: "/services/ui-ux",
    name: "UI / UX Design",
    icon: Palette,
    description: "User interface & experience design",
  },
  {
    path: "/services/ecommerce",
    name: "E-commerce Solutions",
    icon: ShoppingCart,
    description: "E-commerce website development",
  },
  {
    path: "/services/business-website",
    name: "Business Website",
    icon: Globe,
    description: "Business website solutions",
  },
  {
    path: "/services/react-development",
    name: "React JS Development",
    icon: Code,
    description: "React.js web development",
  },
  {
    path: "/services/mobile-responsive",
    name: "Mobile Responsive Design",
    icon: Smartphone,
    description: "Mobile-friendly website design",
  },
  // {
  //   path: "/services/website-redesign",
  //   name: "Website Redesign",
  //   icon: MessageCircle,
  //   description: "Website redesign services",
  // },
];

// You can also export grouped services for different sections
export const mainServices = [
  {
    path: "/services/web-development",
    name: "Web Development",
    icon: Code,
  },
  {
    path: "/services/website-design",
    name: "Website Design",
    icon: Monitor,
  },
  {
    path: "/services/search-engine-optimization",
    name: "SEO Optimization",
    icon: Search,
  },
  {
    path: "/services/digital-marketing",
    name: "Digital Marketing",
    icon: TrendingUp,
  },
  {
    path: "/services/app-development",
    name: "App Development",
    icon: AppIcon,
  },
  {
    path: "/services/ecommerce",
    name: "E-commerce Solutions",
    icon: ShoppingCart,
  },
];

export const additionalServices = [
  {
    path: "/services/annual-maintenance",
    name: "Annual Maintenance",
    icon: Wrench,
  },
  {
    path: "/services/ui-ux",
    name: "UI / UX Design",
    icon: Palette,
  },
  {
    path: "/services/mobile-responsive",
    name: "Mobile Responsive",
    icon: Smartphone,
  },
  {
    path: "/services/website-redesign",
    name: "Website Redesign",
    icon: MessageCircle,
  },
];
