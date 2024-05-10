import { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {

    const [text, setText] = useState(0);
    const [darkTheme, setDarkTheme] = useState(true);


    const prime = useMemo(() => findPrime(text), [text]);


  return (
    <div className={"relative top-12 m-4 p-2 w-96 h-96 border border-black " + (darkTheme && "bg-gray-900 text-white")}>
        <div>
            <button onClick={() => setDarkTheme(!darkTheme)} className="p-2 bg-green-500 m-2 rounded-lg cursor-pointer">Toggle</button>
        </div>
        <div>
            <input type="number" onChange={(e) => setText(e.target.value)} value={text} className={"border border-black p-2 w-72 " + (darkTheme && "text-black")} />
        </div>
        <div>
            <h1 className="mt-4 font-bold text-xl">nth Prime: {prime}</h1>
        </div>
    </div>
  )
}

export default Demo;