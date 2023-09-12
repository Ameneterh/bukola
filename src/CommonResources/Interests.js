import styles from "./Interests.module.css";

export default function Interests(props) {
  return (
    <div
      className={styles.portfolio}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <h1>{props.interestTitle}</h1>
    </div>
  );
}
