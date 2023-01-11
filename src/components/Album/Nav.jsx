import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectCurrentlyPlaying } from "../../features/currentSong";
export default function Nav({ setView }) {
  const nav = ["Songs", "Videos", "Albums"];
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className="w-full border-b-2 border-primary fixed top-0 left-[20%] bg-primary2 ml-6 pt-6">
      <div className="w-1/4 flex justify-between pb-4">
        {nav.map((el, i) => (
          <NavEl
            el={el}
            key={i}
            active={active}
            setActive={setActive}
            setView={setView}
            i={i}
            dispatch={dispatch}
            selectCurrentlyPlaying={selectCurrentlyPlaying}
          />
        ))}
      </div>
    </div>
  );
}

function NavEl({
  el,
  active,
  i,
  setActive,
  setView,
  dispatch,
  selectCurrentlyPlaying,
}) {
  const isActive = active === i;
  return (
    <p
      className={`text-slate-100 text-xl cursor-pointer transition-all border-b-2 pb-2 ${
        isActive ? "border-secondary" : "border-primary2"
      }`}
      onClick={() => {
        setActive(i);
        setView(el);
        dispatch(selectCurrentlyPlaying({}));
      }}
    >
      {el}
    </p>
  );
}
