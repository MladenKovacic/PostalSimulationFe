
import Image from "next/image";
// import { useEffect, useState } from 'react';

export async function getServerSideProps() {
    const res = await fetch('http://localhost:5000/getall/package/list/12640');
    const data = await res.json();

    return {
        props: { data }, // Will be passed to the page component as props
    };
}

// export default function ServerSideRendering({ data }) {
//     return (
//         <div>
//             <h1>Data from API</h1>
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//     );
// }
