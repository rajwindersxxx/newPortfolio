import styles from './LoadingSpinner.module.css';
export default function LoadingSpinner() {
  return (
    <div
      className={`${styles.loader} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `}
    ></div>
  );
}
