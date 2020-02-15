import React from 'react'
import WatchInfo from './watchInfo.module.css'

const watchData = (props) => {
    console.log(props)
    return (
        <div className={WatchInfo.maincontainer}>
            <div className={WatchInfo.namesection}>
                <h1>Fit Bit 19 : The Smartest Watch</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugiat aperiam aspernatur laudantium culpa officiis, illo quam. Velit itaque quo quam dolorem, natus, dolores facilis repudiandae magni, temporibus error ea!</p>
            </div>
            <h2>Select Color</h2>
            <div className={WatchInfo.color_section}>
                <div className={WatchInfo.redband} onClick={props.red}></div>
                <div className={WatchInfo.blueband} onClick={props.blue}></div>
                <div className={WatchInfo.blackband} onClick={props.black}></div>
                <div className={WatchInfo.purpleband} onClick={props.purple}></div>
            </div>
            <h2>Feature</h2>
            <div className={WatchInfo.feature_section}>
                <button className={WatchInfo.timebtn} onClick={props.showTime}>Time</button>
                <button className={WatchInfo.heartbtn} onClick={props.showHeartRate}>Heart Rate</button>
            </div>
            <div className={WatchInfo.buy_section}>
                <button className={WatchInfo.buybtn}>Buy Now</button>
            </div>
        </div>
    )

}

export default watchData;