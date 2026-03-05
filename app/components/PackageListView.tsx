"use client";
import { useState } from "react";


interface Package {
    senderName: string;
    senderZipCode: string;
    recipientName: string;
    recipientZipCode: string;
}

interface PackageResponse {
    outgoing: Package[];
    incoming: Package[];
}

export default function PackageListView() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [zip, setZip] = useState("");
    const [data, setData] = useState<PackageResponse| null>(null);

    const fetchPackages = async () => {
        try {
            const res = await fetch(`${apiUrl}/getall/package/list/${zip}`);
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
            <h2 className="text-black"
            >Package List</h2>
            <input 
                placeholder="Enter Zipcode"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="p-2 mr-2 bg-black text-white" 
            />
            <button className="w-full px-3 py-3 bg-blue-500 text-white font-bold border-0 rounded-md cursor-pointer transition duration-200 hover:bg-blue-600" onClick={fetchPackages}>Fetch</button>

            {data && (
                <>
                    <h3>Outgoing</h3>
                    {data.outgoing.map((p: Package, i: number) => (
                        <div className="border border-[#ccc] p-2 mb-1.5 rounded-md bg-white text-black"
                            key={i}
                       
                        >
                            <p><strong>From:</strong> {p.senderName}({p.senderZipCode})</p>
                            <p><strong>To:</strong> {p.recipientName} ({p.recipientZipCode})</p>
                        </div>
                    ))}

                    <h3 >Incoming</h3>
                    {data.incoming.map((p: Package, i: number) => (
                        <div className="border border-[#ccc] p-2 mb-1.5 rounded-md bg-white text-black"
                            key={i}
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