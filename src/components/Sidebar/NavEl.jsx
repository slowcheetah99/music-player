import { useState } from "react";
export default function NavEl({ item }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`py-4 cursor-pointer font-medium rounded-lg ${
        hover
          ? " bg-accent/20 pl-4 text-accent "
          : " text-secondary transition-all "
      } flex items-center gap-x-2 last-of-type:mb-4`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <span>{item.icon}</span>
      <span>{item.label}</span>
    </div>
  );
}
