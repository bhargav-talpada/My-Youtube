import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import useGetVideos from "../hooks/useGetVideos";
import WatchVideoInfo from "./WatchVideoInfo";
import CommentsContainer from "./CommentsContainer";
import WatchPagePlaylistVideos from "./WatchPagePlaylistVideos";

const WatchPage = () => {

    const dispatch = useDispatch();
    const [params] = useSearchParams();

    useEffect(() => {
        dispatch(closeMenu());
    },[]);

    const videos = useGetVideos();

    const filterVideo = videos.filter((vidoeId) => vidoeId.id === params.get("v"));

    return (
        <div className="flex flex-col px-32 pt-20 scroll-smooth">
            <div className=" md:flex justify-center h-[470px]">
                <iframe width="850" height="470" className="rounded-2xl" src={"https://www.youtube.com/embed/" + params.get("v")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <WatchPagePlaylistVideos />
            </div>
            <div className="flex flex-col pt-[520px] md:pt-0">
                {
                    filterVideo.map((filterVideo) => 
                        <> 
                            <WatchVideoInfo key={filterVideo.id} vidoeInfo={filterVideo} />
                            <CommentsContainer key={filterVideo.id} videoId={filterVideo.id} comments={filterVideo} /> 
                        </>
                    )
                }
            </div>
        </div>
  )
}

export default WatchPage;