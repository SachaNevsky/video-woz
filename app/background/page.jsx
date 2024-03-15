"use client";

import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faArrowLeft, faPause, faVolumeHigh} from "@fortawesome/free-solid-svg-icons";

const Background = () => {

    const videoRef = useRef(null);
    const vocalRef = useRef(null);
    const carRef = useRef(null);

    const [backgroundVolume, setBackgroundVolume] = useState(20);
    const [vocalVolume, setVocalVolume] = useState(100);

	const handlePlay = () => {
		videoRef.current.play();
        vocalRef.current.play();
        carRef.current.play();
	}

	const handlePause = () => {
		videoRef.current.pause();
        vocalRef.current.pause();
        carRef.current.pause();
	}

	const handleRestart = () => {
		videoRef.current.currentTime = 0;
		videoRef.current.pause();
	}

    useEffect(() => {
        if(!!vocalRef.current || !!carRef.current || !!videoRef.current) {
            vocalRef.current.volume = vocalVolume/100;
            carRef.current.volume = backgroundVolume/100;
        }

    }, [vocalVolume, backgroundVolume])

    return(
        <div className="bg-black p-4 h-[96vh] text-white text-center">
			<div className="grid grid-cols-9 pb-2">
				<button className="bg-gray-700 py-2 px-3 mx-5 rounded-lg hover:bg-gray-900 col-start-4" onClick={handlePlay}>Play <FontAwesomeIcon icon={faPlay} style={{"padding": "0 0.5vw 0 0.5vw"}}/></button>
				<button className="bg-gray-700 py-2 px-3 mx-5 rounded-lg hover:bg-gray-900" onClick={handlePause}>Pause <FontAwesomeIcon icon={faPause} style={{"padding": "0 0.5vw 0 0.5vw"}}/></button>
				<button className="bg-gray-700 py-2 px-3 mx-5 rounded-lg hover:bg-gray-900" onClick={handleRestart}>Restart <FontAwesomeIcon icon={faArrowLeft} style={{"padding": "0 0.5vw 0 0.5vw"}}/></button>
			</div>
			<video id="video" src="/bbc_video.mp4" ref={videoRef} type="video/mp4" className="mx-auto h-4/5" />
            <audio src="bbc_vocals.mp3" type="audio/mpeg" ref={vocalRef}/>
            <audio src="car_audio.mp3" type="audio/mpeg" ref={carRef}/>
            <div className="grid grid-cols-9 gap-1 text-left pt-2">
                <label className="col-start-4"><FontAwesomeIcon icon={faVolumeHigh} style={{"padding": "0 0.5vw 0 0.5vw"}}/> Vocal Volume: </label>
                <input className="col-span-2 mr-1" type="range" id="vocalSlider" name="Vocals" min="0" max="100" value={vocalVolume} onChange={(e) => setVocalVolume(e.target.value)}/>{vocalVolume}%
            </div>
            <div className="grid grid-cols-9 gap-1 text-left py-2">
                <label className="col-start-4"><FontAwesomeIcon icon={faVolumeHigh} style={{"padding": "0 0.5vw 0 0.5vw"}}/>Background Volume: </label>
                <input className="col-span-2 mr-1" type="range" id="backgroundSlider" name="Background" min="0" max="100" value={backgroundVolume*5} onChange={(e) => setBackgroundVolume(e.target.value/5)}/>{backgroundVolume*5}%
            </div>
		</div>
    )
}

export default Background;