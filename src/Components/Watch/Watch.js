import React from 'react';
import WatchCss from './watch.module.css'

const watch = () => {
    return (
        <div className={WatchCss.watch_container}>
            <div className={WatchCss.watch}>
                <img src="https://i.imgur.com/Zygu7I3.png" alt="WatchLogo" />
            </div>


            <div className={WatchCss.heart_section}>
                <i className="fas fa-heartbeat"></i>
                <p>64</p>
            </div>
        </div>
    )
}

export default watch;