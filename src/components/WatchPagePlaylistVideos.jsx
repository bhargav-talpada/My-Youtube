import useGetVideos from "../hooks/useGetVideos";
import usePlaylistVideos from "../hooks/usePlayslistVideos";
import PlaylistVideoCards from "./PlaylistVideoCards";

const WatchPagePlaylistVideos = () => {

    const videos = useGetVideos();

    const playlistVideo = usePlaylistVideos();

  return (
    <div className="h-[770px] mx-10 w-[450px] overflow-y-scroll rounded-2xl">
        {
            playlistVideo.map((playlist) => 
                <PlaylistVideoCards key={playlist.id} playlistCardInfo={playlist}  />
            )
        }
    </div>
  )
}

export default WatchPagePlaylistVideos;