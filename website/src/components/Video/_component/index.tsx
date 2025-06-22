import React from "react";

type YouTubeVideoProps = {
  type: "youtube";
  src: { youtube: string };
  maxWidth?: string;
  alt?: string;
};

type LocalVideoProps = {
  type: "local";
  src: {
    webm: string;
    mp4: string;
    ogg?: string;
  };
  maxWidth?: string;
  alt?: string;
};

type VideoProps = YouTubeVideoProps | LocalVideoProps;

const Video: React.FC<VideoProps> = ({ type, src, maxWidth = "100%", alt = "Video content" }) => {
  const style = {
    maxWidth,
    width: "100%",
    borderRadius: type === "local" ? "8px" : undefined,
    aspectRatio: type === "youtube" ? "16 / 9" : undefined,
  } as React.CSSProperties;

  if (type === "youtube") {
    return (
      <iframe
        src={src.youtube}
        title={alt}
        aria-label={alt}
        style={style}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; embed"
        allowFullScreen
      />
    );
  }

  if (type === "local") {
    const { webm, mp4, ogg } = src;
    return (
      <video
        // autoPlay
        loop
        muted
        playsInline
        style={style}
        aria-label={alt}
        title={alt}
      >
        <source src={webm} type="video/webm" />
        <source src={mp4} type="video/mp4" />
        {ogg && <source src={ogg} type="video/ogg" />}
        Your browser does not support the video tag.
      </video>
    );
  }

  return null;
};

export default Video;
