import bgImg from "/src/assets/images/1.jpg";
import { BiUserCircle as User } from "react-icons/bi";
import { useState } from "react";
export default function Header() {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="w-[80%] h-[40vh] top-0 left-[20%] fixed pointer-events-auto"
      style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden backdrop-blur-[10px] bg-blur"></div>
      <div className="absolute top-12 left-12 flex gap-x-4 items-center">
        <div
          className="w-40 h-40 rounded-full"
          style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}
        ></div>
        <div className="flex flex-col gap-y-2 text-primary">
          <p className="text-2xl font-bold">Jenny Wilson</p>
          <p className="text-md font-bold">User metadata</p>
          <button
            className={`flex w-fit gap-x-2 items-center px-4 py-2 bg-primary rounded-3xl text-secondary transition-all ${
              hover && " scale-105"
            }`}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            <User className="text-3xl" />
            <span className="font-bold">Edit Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
