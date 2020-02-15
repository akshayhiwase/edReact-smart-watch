import React, { Component } from 'react'
import WatchInfo from './watchInfo.module.css'

class WatchData extends Component {
    state = {

    }

    render() {
        return (
            <div className={WatchInfo.maincontainer}>
                <div className={WatchInfo.namesection}>
                    <h1>Fit Bit 19 : The Smartest Watch</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugiat aperiam aspernatur laudantium culpa officiis, illo quam. Velit itaque quo quam dolorem, natus, dolores facilis repudiandae magni, temporibus error ea!</p>
                </div>
                <h2>Select Color</h2>
                <div className={WatchInfo.color_section}>
                    <div className={WatchInfo.redband}></div>
                    <div className={WatchInfo.blueband}></div>
                    <div className={WatchInfo.blackband}></div>
                    <div className={WatchInfo.purpleband}></div>
                </div>
                <h2>Feature</h2>
                <div className={WatchInfo.feature_section}>
                    <button className={WatchInfo.timebtn}>Time</button>
                    <button className={WatchInfo.heartbtn}>Heart Rate</button>
                </div>
                <div className={WatchInfo.buy_section}>
                    <button className={WatchInfo.buybtn}>Buy Now</button>
                </div>
            </div>
        )
    }
}

export default WatchData;