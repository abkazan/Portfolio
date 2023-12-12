import React from 'react';
import YouTube from 'react-youtube';
import styles from './video.module.scss';
const VideoPlayer = () => {
    
    const opts = {
        
        playerVars: {
          autoplay: 0,
          width: 390,
          height: 640
        },
    };
    return (
        <div className={styles.VideoPlayer}>

        
        <YouTube videoId='ar_mjkxs0PE' opts={opts} />
        </div>
        
    );
};
export default VideoPlayer;