import styles from "../../styles/counter.module.css";

export default function CounterHeading({ title }) {
  return (
    <div className={`${styles.counterHeading}`}>
      <h3 className="text-white text-uppercase">{title}</h3>
    </div>
  );
}
