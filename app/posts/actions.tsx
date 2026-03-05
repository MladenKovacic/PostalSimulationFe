'use server'
import { redirect } from 'next/navigation'

export async function createPost(formData: FormData) {
    const zip = formData.get("zip");
    const data = {
        senderName: formData.get("senderName"),
        senderStreet: formData.get("senderStreet"),
        senderCity: formData.get("senderCity"),
        senderZipCode: formData.get("senderZipCode"),

        recipientName: formData.get("recipientName"),
        recipientStreet: formData.get("recipientStreet"),
        recipientCity: formData.get("recipientCity"),
        recipientZipCode: formData.get("recipientZipCode"),

        weightGrams: formData.get("weightGrams") ?? 0,
        mailType: formData.get("mailType") ?? 0,
    };
    await fetch(`http://localhost:5000/sendmail/${zip}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    redirect(`http://localhost:3000/packages`)
}