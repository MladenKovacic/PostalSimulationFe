"use client";
import { useState } from "react";
import styles from "./Sidebar.module.css";

export default function PackageListView() {
    const [zip, setZip] = useState("");
    const [data, setData] = useState<any>(null);

    const fetchPackages = async () => {
        try {
            const res = await fetch(`http://localhost:5000/getall/package/list/${zip}`);
            if (!res.ok) throw new Error("Failed to fetch");
            const result = await res.json();
            setData(result);
        } catch (err) {
            console.error(err);
            alert("Failed to fetch packages. Check zip code.");
        }
    };

    return (
        <div>
            <h2 style={{
                color: "#000",
            }}>Package List</h2>
            <input 
                placeholder="Enter Zipcode"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                style={{ padding: "8px", marginRight: "8px",backgroundColor: "#fff",
                    color: "#000", }}
            />
            <button className={styles.button} onClick={fetchPackages}>Fetch</button>

            {data && (
                <>
                    <h3>Outgoing</h3>
                    {data.outgoing.map((p: any, i: number) => (
                        <div
                            key={i}
                            style={{
                                border: "1px solid #ccc",
                                padding: "8px",
                                marginBottom: "6px",
                                borderRadius: "6px",
                                backgroundColor: "#fff",
                                color: "#000",
                            }}
                        >
                            <p><strong>From:</strong> {p.senderName} ({p.senderZipCode})</p>
                            <p><strong>To:</strong> {p.recipientName} ({p.recipientZipCode})</p>
                        </div>
                    ))}

                    <h3>Incoming</h3>
                    {data.incoming.map((p: any, i: number) => (
                        <div
                            key={i}
                            style={{
                                border: "1px solid #ccc",
                                padding: "8px",
                                marginBottom: "6px",
                                borderRadius: "6px",
                                backgroundColor: "#fff",
                                color: "#000",
                            }}
                        >
                            <p><strong>From:</strong> {p.senderName} ({p.senderZipCode})</p>
                            <p><strong>To:</strong> {p.recipientName} ({p.recipientZipCode})</p>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}