import Image from "next/image";

const DATA_URL = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";


export default function Page() {
    return(
        <div className="p-4 bg-yellow-300">
            <header>
                <h1>Welcom to my product page</h1>
                <button className="border-neutral-200 bg-black px-6">Fetch Products!</button>
            </header>
            Hello welcome to my API page T_T
        </div>
    );
}

