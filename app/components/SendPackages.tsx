"use client";
 import { createPost } from "../posts/actions"
import Form from 'next/form'

export default function SendPackages() {
    return (
        <Form action={createPost}>
            <div className="flex flex-col gap-2.5">
                <input className="p-2 mr-2 bg-white text-black"  name="zip" placeholder={"Zip where to send"} />
                <input className="p-2 mr-2 bg-white text-black"  name="senderName" placeholder={"SenderName"} />
                <input className="p-2 mr-2 bg-white text-black"  name="senderStreet" placeholder={"Senderstreet"} />
                <input className="p-2 mr-2 bg-white text-black"  name="senderCity" placeholder={"sendercity"} />
                <input className="p-2 mr-2 bg-white text-black"  name="senderZipCode" placeholder={"senderzipCode"} />
                <input className="p-2 mr-2 bg-white text-black"  name="recipientName" placeholder={"recipientname"} />
                <input className="p-2 mr-2 bg-white text-black"  name="recipientStreet" placeholder={"recipientstreet"} />
                <input className="p-2 mr-2 bg-white text-black"  name="recipientCity" placeholder={"recipientcity"} />
                <input className="p-2 mr-2 bg-white text-black"  name="recipientZipCode" placeholder={"recipientzipCode"} />
                <input className="p-2 mr-2 bg-white text-black"  name="weightGrams" placeholder={"weightGrams"} />
                <input className="p-2 mr-2 bg-white text-black"  name="mailType" placeholder={"mailType"} />
            </div>
          
            <button className="w-full px-3 py-3 bg-blue-500 text-white font-bold border-0 rounded-md cursor-pointer transition duration-200 hover:bg-blue-600" 
                    type="submit">Submit</button>
        </Form>
    )
}