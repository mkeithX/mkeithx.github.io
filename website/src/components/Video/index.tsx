import styles from './styles.module.css';
import React, { useRef, useState } from 'react';
import Video from './_component';

type PlayerProps = {
  type: 'youtube' | 'local';
  src: any;
  alt?: string;
  maxWidth?: string;
  poster?: string;
};

const Player: React.FC<PlayerProps> = ({ type, src, alt, maxWidth, poster }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayback = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className={styles.playerContainer} style={{ maxWidth }}>
      {type === 'local' ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className={styles.videoElement}
            poster={poster}
            title={alt}
            aria-label={alt}
          >
            <source src={src.webm} type="video/webm" />
            <source src={src.mp4} type="video/mp4" />
            {src.ogg && <source src={src.ogg} type="video/ogg" />}
            Your browser does not support the video tag.
          </video>

          <button onClick={togglePlayback} className={styles.controlButton}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </>
      ) : (
        <Video type="youtube" src={src} alt={alt} maxWidth={maxWidth} />
      )}
    </div>
  );
};

export default Player;
