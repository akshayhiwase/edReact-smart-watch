import React from 'react';
import HeartCss from './heartrate.module.css'

const heartRate = () => {
    return (
        <div className={HeartCss.heart_section}>
            <i className="fas fa-heartbeat"></i>
            <p>64</p>
        </div>
    )
}
export default heartRate;