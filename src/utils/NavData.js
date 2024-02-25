import { SiPowerpages } from "react-icons/si";
import { FaHome } from "react-icons/fa";

export const NavData = [
  {
    pageName: "main",
    pageTitle: "Dashboards",
    icon: <FaHome />,
    subItems: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "About",
        url: "/about",
      },
      {
        name: "Home",
        url: "/",
      },
      {
        name: "About",
        url: "/about",
      },
    ],
  },
  {
    pageName: "pages",
    pageTitle: "Route",
    icon: <SiPowerpages />,
    subItems: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "About",
        url: "/about",
      },
      {
        name: "Home",
        url: "/",
      },
      {
        name: "About",
        url: "/about",
      },
    ],
  },
];
