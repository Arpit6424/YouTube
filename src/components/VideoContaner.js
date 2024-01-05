import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContaner = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json);
    setVideo(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {video.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContaner;
