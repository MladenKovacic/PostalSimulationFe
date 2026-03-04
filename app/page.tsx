"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import PostalOfficeView from "./components/PostalOfficeView";
import PackageListView from "./components/PackageListView";

export default function Home() {
    const [activeView, setActiveView] = useState("offices");

    return (
        <div style={{ display: "flex" }}>
            <Sidebar setActiveView={setActiveView} />
            <div style={{ flex: 1, padding: "20px", backgroundColor: "#e6f0ff", minHeight: "100vh" }}>
                {activeView === "offices" && <PostalOfficeView />}
                {activeView === "packages" && <PackageListView />}
            </div>
        </div>
    );
}