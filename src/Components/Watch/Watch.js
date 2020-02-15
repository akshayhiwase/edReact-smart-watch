import React from 'react';
import WatchCss from './watch.module.css'

const watch = (props) => {
    return (
        <div className={WatchCss.watch_container}>
            <div className={WatchCss.watch}>
                <img src={props.img} alt={props.alt} />
            </div>
            <div className={WatchCss.time_section}>
                {props.children}
            </div>


        </div>
    )
}

export default watch;