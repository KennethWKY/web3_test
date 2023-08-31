"use client";

import { useState } from "react";
import { useEth, NotReadyReason } from "@/eth.context";
import { Contract } from "./contract.component";
import { ContractControls } from "./contract-controls.component";
import styles from "./demo.module.css";

export function Demo(): JSX.Element {
  const [value, setValue] = useState("?");

  const eth = useEth();
  if (!eth.ready) {
    switch (eth.notReadyReason) {
      case NotReadyReason.Initializing:
        return <p>Initializing...</p>;
      case NotReadyReason.NoWallet:
        return <p>⚠️ Cannot find wallet.</p>;
      case NotReadyReason.NoArtifact:
        return (
          <p>
            ⚠️ Cannot find <span className="code">SimpleStorage</span> contract
            artifact. Please complete the above preparation first.
          </p>
        );
      case NotReadyReason.NoAccount:
        return <p>⚠️ Wallet not connected.</p>;
      case NotReadyReason.WrongNetwork:
        return (
          <p>
            ⚠️ MetaMask is not connected to the same network as the one you
            deployed to.
          </p>
        );
    }
  }

  return (
    <section>
      <div className={styles["contract-container"]}>
        <Contract value={value} />
        <ContractControls setValue={setValue} />
      </div>
    </section>
  );
}
