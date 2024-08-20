import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";

const useGetVideos = () => {
    const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return videos;

};

export default useGetVideos;