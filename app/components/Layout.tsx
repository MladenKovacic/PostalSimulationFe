"use client"
import { useState } from "react";
import Sidebar from "./Sidebar";
import PostalOfficeView from "./PostalOfficeView";
import PackageListView from "./PackageListView";
import styles from "./Layout.module.css";

export default function Layout() {
    const [activeView, setActiveView] = useState("offices");

    return (
        <div className={styles.container}>
            <Sidebar setActiveView={setActiveView} />

            <div className={styles.content}>
                {activeView === "offices" && <PostalOfficeView />}
                {activeView === "packages" && <PackageListView />}
            </div>
        </div>
    );
}