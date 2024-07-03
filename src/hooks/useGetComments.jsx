import { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";

const useGetComments = (videoId) => {

    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        getComments();
    },[]);

    const getComments = async () => {
        const data = await fetch("https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=" + videoId + "&key=" + GOOGLE_API_KEY);
        const json = await data.json();
        setAllComments(json.items);
    }

    return allComments;
}

export default useGetComments