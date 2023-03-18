import styles from "../../styles/counter.module.css";

export default function counterDisplay({ count }) {
  return (
    <div className="d-flex justify-content-center">
      <div className={styles.counterDisplay}>{count}</div>
    </div>
  );
}
