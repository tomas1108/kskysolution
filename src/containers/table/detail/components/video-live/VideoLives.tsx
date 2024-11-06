import { useEffect, useState } from 'react';
import { usePlayerBet, usePlayerBetDispatch } from '../../context';
import { Types, VideoType } from '../../context/reducers';
import queryString from 'query-string';

type VideoLiveProps = {
  videoIdSmall?: string;
  videoIdLarge?: string;
};

const VideoLive: React.FC<VideoLiveProps> = ({
  videoIdSmall,
  videoIdLarge
}) => {
  const [video, setVideo] = useState<VideoType>({
    small: '',
    large: ''
  });
  const dispatch = usePlayerBetDispatch();

  useEffect(() => {
    if (videoIdSmall && videoIdLarge) {
      setVideo({
        small: videoIdSmall,
        large: videoIdLarge
      });
    }
  }, [videoIdSmall, videoIdLarge]);

  const onHandleSwapVideo = (video: VideoType) => {
    setVideo(video);
  };

  const srcVideo = (id: string, mute: 0 | 1) => {
    const params = queryString.stringify({
      autoplay: 1,
      mute,
      autohide: 1,
      showinfo: 0,
      controls: 0,
      rel: 0,
      feature: 'share',
      disablekb: 1
    });
    return `https://youtube.com/embed/${id}?${params}`;
  };

  return (
    <>
      <div className="h-full w-full">
        <iframe
          width="100%"
          height="100%"
          src={srcVideo(video.large, 1)}
        ></iframe>
      </div>
      <div className="absolute right-10 top-4 overflow-hidden rounded-lg border-2">
        <iframe
          width="300"
          height="200"
          src={srcVideo(video.small, 1)}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ cursor: 'pointer' }}
        ></iframe>
        <div
          className="absolute inset-0 z-10 cursor-pointer bg-transparent"
          onClick={onHandleSwapVideo.bind(null, {
            large: video.small,
            small: video.large
          })}
        />
      </div>
      <div className="absolute h-full w-full bg-transparent" />
    </>
  );
};

export default VideoLive;
