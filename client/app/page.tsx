import { EthProvider } from "@/eth.context";
import { Demo } from "@/components/demo";
import styles from "./page.module.css";

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <EthProvider>
        <Demo />
      </EthProvider>
    </div>
  );
}
