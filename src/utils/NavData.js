import { SiPowerpages } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { ImProfile } from "react-icons/im";

export const NavData = [
  {
    pageName: "main", // Not change able
    pageTitle: "Dashboards",
    icon: <LuLayoutDashboard />,
    subItems: [
      {
        name: "Home",
        url: "/dashboard",
      },
    ],
  },
  {
    pageName: "pages",
    pageTitle: "Home",
    icon: <FaHome />,
    subItems: [
      {
        name: "Forms",
        url: "/dashboard/home-page",
      },
      {
        name: "not-found",
        url: "/dashboard/not-found",
      },
      {
        name: "alert",
        url: "/dashboard/alert",
      },
      {
        name: "Table",
        url: "/dashboard/table",
      },
    ],
  },
  {
    pageName: "personal info",
    pageTitle: "Profile",
    icon: <ImProfile />,
    subItems: [
      {
        name: "My Profile",
        url: "/dashboard/my-profile",
      },
      {
        name: "Inbox",
        url: "/dashboard/inbox",
      },
    ],
  },
];
