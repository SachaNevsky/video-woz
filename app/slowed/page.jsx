"use client";

import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faArrowLeft, faPause, faClock} from "@fortawesome/free-solid-svg-icons";

const Background = () => {

    const videoRef = useRef(null);

    const [speed, setSpeed] = useState(100);

	const handlePlay = () => {
		videoRef.current.play();
	}

	const handlePause = () => {
		videoRef.current.pause();
	}

	const handleRestart = () => {
		videoRef.current.currentTime = 0;
		videoRef.current.pause();
	}

    useEffect(() => {
        if(!!videoRef.current) {
            videoRef.current.playbackRate = speed/100;
        }

    }, [speed])

    return(
        <div className="bg-black p-4 h-[96vh] text-white text-center">
			<div className="grid grid-cols-9 pb-2">
				<button className="bg-gray-700 py-2 px-3 mx-5 rounded-lg hover:bg-gray-900 col-start-4" onClick={handlePlay}>Play <FontAwesomeIcon icon={faPlay} style={{"padding": "0 0.5vw 0 0.5vw"}}/></button>
				<button className="bg-gray-700 py-2 px-3 mx-5 rounded-lg hover:bg-gray-900" onClick={handlePause}>Pause <FontAwesomeIcon icon={faPause} style={{"padding": "0 0.5vw 0 0.5vw"}}/></button>
				<button className="bg-gray-700 py-2 px-3 mx-5 rounded-lg hover:bg-gray-900" onClick={handleRestart}>Restart <FontAwesomeIcon icon={faArrowLeft} style={{"padding": "0 0.5vw 0 0.5vw"}}/></button>
			</div>
			<video id="video" src="/video.mp4" ref={videoRef} type="video/mp4" className="mx-auto h-4/5" />
            <div className="grid grid-cols-9 text-left pt-2">
                <label className="col-start-4"><FontAwesomeIcon icon={faClock} style={{"padding": "0 0.5vw 0 0.5vw"}}/> Control Speed: </label>
                <input className="col-span-2 mr-2" type="range" id="vocalSlider" name="Vocals" min="75" max="125" value={speed} onChange={(e) => setSpeed(e.target.value)}/>
				{speed}%
            </div>
		</div>
    )
}

export default Background;