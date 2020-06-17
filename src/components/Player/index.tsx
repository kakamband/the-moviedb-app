import React, { useEffect, useRef } from 'react';
import { VIDEO_LIST_URI } from '../../services/api';

import shaka from 'shaka-player';

export interface IPlayer {
  autoPlay?: boolean;
  fullScreen?: boolean;
  width?: any;
  height?: any;
}

// It configure the player ambient.
const Player: React.FC<IPlayer> = ({
  autoPlay = true,
  width = '100%',
  height = '100%',
}) => {
  // It get ui/video and set to HTML element
  const uiRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    //It created a player instance
    const player = new shaka.Player(videoRef.current);

    async function loadAsset() {
      if (player) {
        //It listen for error events
        player.addEventListener('error', function (event: any) {
          console.log(event);
        });

        //It await to load the route to video or log the error
        await player.load(`${VIDEO_LIST_URI}`).catch((error: any) => {
          console.error('Error code', error.code, 'object', error);
        });

        //It play video in fullScreen, if not send error message
        if (videoRef.current) {
          try {
            videoRef.current.requestFullscreen();
          } catch (error) {
            console.error('Your browser do not support fullscreen videos.');
          }
        }
      }
    }
    loadAsset();
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
