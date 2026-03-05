"use client";
import {useEffect, useState} from "react";

interface OfficeInfo {
    street: string;
    city: string;
    zipCode: string;

}


export default function PostalOfficeView() {
    const [offices, setOffices] = useState<OfficeInfo[]>([]);

    useEffect(() => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        fetch(`${apiUrl}/getall/postaloffices`)
            .then((res) => res.json())
            .then((data) => setOffices(data))
            .catch(console.error);
    }, []);

    return (
        <div>
            <h2>Postal Offices</h2>
            {offices.map((office, index) => (
                <div className="border border-[#ccc] p-2 mb-2.5 rounded-md bg-white text-black"
                     key={index}
                >
                    <p><strong>Street:</strong> {office.street}</p>
                    <p><strong>City:</strong> {office.city}</p>
                    <p><strong>ZipCode:</strong> {office.zipCode}</p>
                </div>
            ))}
        </div>
    );
}