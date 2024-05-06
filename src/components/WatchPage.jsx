import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {

    const dispatch = useDispatch();
    const [params] = useSearchParams();

    useEffect(() => {
        dispatch(closeMenu());
    },);
    return (

    <div className="px-32 pt-2">
        <iframe width="850" height="470" className="rounded-2xl" src={"https://www.youtube.com/embed/" + params.get("v")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            
        </iframe>
    </div>
  )
}

export default WatchPage;