import { getProducts } from "@/service/products";
import Link from "next/link";

// export const revalidate = 3;

// at the momnet, only used static data - in the memory
// const items = ['shirt', 'pants', 'skirts', 'shoes'];
// Let's say we will get the dynamic data from the server (database) - server file
// read data from the server file and display

export default async function ProductsPage() {
    const items = await getProducts(); // ['shirt', 'pants', 'skirts', 'shoes'];

    const res = await fetch('https://meowfacts.herokuapp.com', {
        next: {revalidate: 3},
        //cache: 'no-store'
    });
    const data = await res.json();
    const factText = data.data[0];

    return (
        <>
        <h1>Products Page</h1>
        <ul>
            {items.map((item,index)=>(
                <li key={index}>
                    <Link href={`products/${item.id}`}>{item.name}</Link>
                </li>
            ))}
        </ul>
        <article>
            {factText}
        </article>
        </>
    );
}

