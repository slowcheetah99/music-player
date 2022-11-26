import { BiMenuAltLeft as Menu, BiSearch as Search } from "react-icons/bi";
import { BsMusicNoteBeamed as Music } from "react-icons/bs";

import { Link } from "react-router-dom";
import { useState } from "react";
import { NavEl } from "./";

export default function SidebarHeader() {
  const [focus, setFocus] = useState(false);

  const nav = [
    {
      icon: <Music />,
      label: "My Music",
      path: "/",
      active: true,
    },
    {
      icon: <Music />,
      label: "Recently Played",
      path: "/played",
      active: false,
    },
    {
      icon: <Music />,
      label: "Most Played",
      path: "/",
      active: false,
    },
  ];

  return (
    <div className="w-full">
      <Link to="/">
        <p className="logo text-center py-4 text-accent text-lg tracking-widest border-b-2 border-secondary/40">
          CommaNoise
        </p>
      </Link>
      <div className="my-4 p-2 bg-accent text-2xl text-primary rounded-full w-fit cursor-pointer">
        <Menu />
      </div>

      <div className="w-full h-fit relative">
        <input
          type="text"
          className="w-full h-12 border-b-2 border-secondary/40 bg-primary p-4 placeholder:italic placeholder:text-sm shadow-sm focus:outline-none focus:border-2 focus:border-secondary/40 focus:ring-1 focus:secondary/40 transition-all"
          onFocus={() => setFocus((state) => !state)}
          onBlur={() => setFocus((state) => !state)}
          placeholder="Search Music"
        />
        {!focus && (
          <span className="absolute right-4 top-4 text-2xl text-secondary/50">
            <Search />
          </span>
        )}
      </div>
    </div>
  );
}
