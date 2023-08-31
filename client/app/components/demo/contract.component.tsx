import { useRef, useEffect } from "react";
import styles from "./contract.module.css";

interface ContractProps {
  value: string;
}

export function Contract({ value }: ContractProps): JSX.Element {
  const valueRef = useRef<HTMLElement>(null);

  useEffect(() => {
    valueRef.current?.classList.add(styles.flash);
    const flash = setTimeout(
      () => valueRef.current?.classList.remove(styles.flash),
      1000
    );
    return () => clearTimeout(flash);
  }, [value]);

  return (
    <code>
      <strong ref={valueRef} className={styles.value}>
        {value}
      </strong>
    </code>
  );
}
