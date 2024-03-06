import { SiPowerpages } from "react-icons/si";
import { FaHome } from "react-icons/fa";

export const NavData = [
  {
    pageName: "main", // Not change able
    pageTitle: "Dashboards",
    icon: <FaHome />,
    subItems: [
      {
        name: "Home",
        url: "/dashboard",
      },
      {
        name: "About",
        url: "/about",
      },
      {
        name: "Home",
        url: "/dashboard/",
      },
      {
        name: "About",
        url: "/about",
      },
    ],
  },
  {
    pageName: "pages",
    pageTitle: "Home",
    icon: <SiPowerpages />,
    subItems: [
      {
        name: "Update content",
        url: "/dashboard/home-page",
      },
      {
        name: "About",
        url: "/about",
      },
      {
        name: "Home",
        url: "/dashboard/",
      },
      {
        name: "About",
        url: "/about",
      },
    ],
  },
  {
    pageName: "demo",
    pageTitle: "Demo Route",
    icon: <SiPowerpages />,
    subItems: [
      {
        name: "no",
        url: "/dashboard/",
      },
      {
        name: "About",
        url: "/about",
      },
      {
        name: "Home",
        url: "/dashboard/",
      },
      {
        name: "About",
        url: "/about",
      },
    ],
  },
];
