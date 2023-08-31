import { useEffect, useState } from "react";
import type React from "react";
import { useEth } from "@/eth.context";
import type { ContextValueReady } from "@/eth.context";
import styles from "./contract-controls.module.css";

interface ContractControlsProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export function ContractControls({
  setValue,
}: ContractControlsProps): JSX.Element {
  const {
    web3,
    account,
    contracts: { Num },
  } = useEth() as ContextValueReady;

  const read = async () => {
    const value = await Num.methods.getNum().call();
    setValue(value.toString());
  };

  const increase = async () => {
    try {
      const receipt = await Num.methods
        .increase()
        .send({ from: account, gas: "250000" });

      console.log("Transaction Receipt:", receipt);

      // You can check the status of the transaction to see if it was successful
      if (receipt.status) {
        console.log("Transaction was successful!");
      } else {
        console.log("Transaction failed or was reverted.");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div onClick={read} className={styles.button}>
          read
        </div>
        <div className={styles.button}>-</div>
        <div onClick={increase} className={styles.button}>
          +
        </div>
      </div>
    </div>
  );
}
