"use client";
import { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    style: {
      backgroundColor: "rgba(63, 195, 128, 0.9)",
      color: "white",
    },
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];
createTheme(
  "solarized",
  {
    text: {
      primary: "#268bd2",
      secondary: "#2aa198",
    },
    background: {
      default: "#002b36",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "#073642",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "dark"
);

const page = () => {
  // solved Hydration failed
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(false);
  }, []);
  if (loader) {
    return <div>Loading</div>;
  }
  return (
    <section>
      <DataTable columns={columns} data={data} pagination theme="solarized" />
    </section>
  );
};

export default page;
