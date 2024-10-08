"use client"
import Image from "next/image";
import {useState} from 'react';



export default function Page() {

    const DATA_URL = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
    const [data, setData] = useState(null);
    const ProductList = () => {
        if (data) {
            return(
                <div>
                    <ul className="border-4 border-black p-4 mb-4">
                        hi
                    </ul>
                </div>
            )
        } else {
            return (
                <div className="border-4 border-black p-4 mb-4">
                    hi
                </div>
            )
        }
    }

    async function fetchData() {
        const response = await fetch(DATA_URL);
        const data = await response.json();
        setData(data);
    }

    return(
        <div className="p-4 bg-blue-300">
            <header className="border-4 border-black p-4 mb-4">
                <h1>Welcom to my product page</h1>
                <button className="border-neutral-200 bg-black px-6" 
                onClick={fetchData}
                >Fetch Products!</button>
            </header>
            <ProductList />
            Hello welcome to my API page T_T
        </div>
    );
}

