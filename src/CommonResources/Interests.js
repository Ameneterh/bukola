// import styles from "./Interests.module.css";

import { Link } from "react-router-dom/dist";

export default function Interests(props) {
  return (
    <div
      className="w-full sm:w-full h-52 sm:h-60 bg-left bg-cover sm:bg-cover bg-no-repeat bg-origin-border rounded-xl p-0 overflow-clip border border-slate-400 shadow-lg shadow-slate-400 flex flex-col justify-between "
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <h1 className="bg-stone-950 py-2 sm:py-3 pl-2 text-white text-md sm:text-xl font-bold">
        {props.interestTitle}
      </h1>
      <Link
        to="/profile"
        className="px-2 py-1 bg-red-400 text-right font-bold hover:underline"
      >
        Read More
      </Link>
    </div>
  );
}
