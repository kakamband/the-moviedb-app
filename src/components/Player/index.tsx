import React, { useEffect, useRef } from 'react';
import shaka from 'shaka-player';
import { VIDEO_LIST_URI } from '../../services/api';

export interface IPlayer {
  autoPlay?: boolean;
  fullScreen?: boolean;
  width?: any;
  height?: any;
}

const Player: React.FC<IPlayer> = ({
  autoPlay = true,
  width = '100%',
  height = '100%',
}) => {
  const uiRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const player = new shaka.Player(videoRef.current);

    async function loadAsset() {
      if (player) {
        player.addEventListener('error', function (event: any) {
          console.log(event);
        });

        await player.load(`${VIDEO_LIST_URI}`).catch((error: any) => {
          console.error('Error code', error.code, 'object', error);
        });
      }
    }

    loadAsset();

    videoRef.current?.requestFullscreen();
  }, [videoRef]);

  return (
    <div ref={uiRef}>
      <video
        ref={videoRef}
        autoPlay={autoPlay}
        width={width}
        height={height}
        style={{ maxWidth: '100%' }}
      />
    </div>
  );
};

export default Player;
