import usePlaylistVideos from "../hooks/usePlayslistVideos";
import PlaylistVideoCards from "./PlaylistVideoCards";
off 
const WatchPagePlaylistVideos = () => {

    const playlistVideo = usePlaylistVideos();
    console.log("playlist",playlistVideo);

  return (
    <div className="h-[500px] md:h-[770px] mx-10 w-[450px] overflow-y-scroll rounded-2xl">
        {
            playlistVideo.map((playlist) => 
                <PlaylistVideoCards key={playlist.id} playlistCardInfo={playlist}  />
            )
        }
    </div>
  )
}

export default WatchPagePlaylistVideos;
