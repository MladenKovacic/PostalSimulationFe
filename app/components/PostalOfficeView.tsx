"use client";
import { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";

export default function PostalOfficeView() {
    const [offices, setOffices] = useState<any[]>([]);

    useEffect(() => {
        fetch("http://localhost:5000/getall/postaloffices")
            .then((res) => res.json())
            .then((data) => setOffices(data))
            .catch(console.error);
    }, []);

    return (
        <div>
            <h2>Postal Offices</h2>
            {offices.map((office, index) => (
                <div
                    key={index}
                    style={{
                        border: "1px solid #ccc",
                        padding: "12px",
                        marginBottom: "10px",
                        borderRadius: "8px",
                        backgroundColor: "#fff",
                        color: "#000",
                    }}
                >
                    <p><strong>Street:</strong> {office.street}</p>
                    <p><strong>City:</strong> {office.city}</p>
                    <p><strong>ZipCode:</strong> {office.zipCode}</p>
                </div>
            ))}
        </div>
    );
}