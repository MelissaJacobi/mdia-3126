import Image from "next/image";

const DATA_URL = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";


export default function Page() {
    return(
        <div className="p-4 bg-blue-300">
            <header className="border-4 border-black p-4 mb-4">
                <h1 className="color-black">Welcom to my product page</h1>
                <button className="border-neutral-200 bg-black px-6" 
                //onClick={}
                >Fetch Products!</button>
            </header>
            <div>
                <ul className="border-4 border-black p-4 mb-4">
                    <li>blah</li>
                    <li>blah</li>
                </ul>
            </div>
            Hello welcome to my API page T_T
        </div>
    );
}
