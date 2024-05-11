import { useEffect, useRef, useState } from "react";

const Demo2 = () => {

    const [y, setY] = useState(0);

    let x = 0;

    const ref = useRef(0);

    let i = useRef(null);

    useEffect(() => {
        i.current = setInterval(() => {
            console.log("react");
        },1000)
        return () => {
            clearInterval(i.current);
        }
    },[]);

  return (
    <div className="h-96 w-96 p-4 m-2 border border-black relative top-14">
        <div>
            <button className="p-2 bg-green-500 text-white rounded-lg" onClick={
                () => {x = x + 1; 
                }
            }>Increase x</button>
            <h1 className="font-bold text-xl">Let = {x}</h1>
        </div>
        <div>
            <button className="p-2 bg-green-500 text-white rounded-lg" onClick={
                () => { setY(y+1) }
                }>Increase Y</button>
            <h1 className="font-bold text-xl">State = {y}</h1>
        </div>
        <div>
            <button className="p-2 bg-green-500 text-white rounded-lg" onClick={
                () => { ref.current = ref.current + 1
                 }
                }>Ref</button>
            <h1 className="font-bold text-xl">Ref = {ref.current}</h1>
        </div>
        <button className="p-2 bg-red-500 text-white rounded-lg" onClick={() => {clearInterval(i.current)}}>Stop Interval</button>
    </div>
  )
}

export default Demo2;