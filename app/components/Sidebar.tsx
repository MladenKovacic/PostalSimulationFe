"use client";
import styles from "./Sidebar.module.css";

type Props = {
    setActiveView: (view: string) => void;
};

export default function Sidebar({ setActiveView }: Props) {
    return (
        <div className={styles.sidebar}>
            <button className={styles.button} onClick={() => setActiveView("offices")}>
                Postal Offices
            </button>
            <button className={styles.button} onClick={() => setActiveView("packages")}>
                Packages
            </button>
        </div>
    );
}