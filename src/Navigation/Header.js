import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full h-16 flex items-center justify-between px-4 sm:px-20 bg-slate-600 shadow-md shadow-slate-500 z-10 border-b border-slate-400">
      <h1 className="text-white font-bold">
        ADEWUSI,{" "}
        <span className="text-slate-300 hidden sm:inline">Adedoyin Bukola</span>
      </h1>
      <Link
        to="/"
        className="w-20 text-white hover:text-black hover:font-bold p-1 bg-slate-400 hover:bg-slate-300 rounded-md text-center"
      >
        Back
      </Link>
      <Link
        to="/profile"
        className="w-32 text-white hover:text-black hover:font-bold p-1 bg-slate-400 hover:bg-slate-300 rounded-md text-center"
      >
        Read Profile
      </Link>
    </div>
  );
}
