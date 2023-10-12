// import styles from "./Interests.module.css";

export default function Interests(props) {
  return (
    <div
      className="w-full sm:w-1/3 h-full sm:h-60 bg-left bg-cover bg-no-repeat bg-origin-border rounded-xl p-0 overflow-clip border border-slate-400 shadow-lg shadow-slate-400"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <h1 className="bg-black py-4 pl-2 text-white text-lg sm:text-xl font-bold">
        {props.interestTitle}
      </h1>
    </div>
  );
}
