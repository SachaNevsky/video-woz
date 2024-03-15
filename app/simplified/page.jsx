"use client";

import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faArrowLeft, faPause, faVolumeControlPhone, faVolumeHigh, faPlus, faThumbsDown, faThumbsUp, faBolt} from "@fortawesome/free-solid-svg-icons";

const Background = () => {

    const videoRef = useRef(null);
    const originalRef = useRef(null);
    const ttsRef = useRef(null);

    const [original, setOriginal] = useState(true);
    const [tts, setTTS] = useState(false);

    const handleChangeVideo = () => {
        console.log("change")
        setOriginal(!original)
        setTTS(!tts)
    }

	const handlePlay = () => {
		videoRef.current.play();
        originalRef.current.play();
        ttsRef.current.play();
	}

	const handlePause = () => {
		videoRef.current.pause();
        originalRef.current.pause();
        ttsRef.current.pause();
	}

	const handleRestart = () => {
		videoRef.current.currentTime = 0;
        originalRef.current.currentTime = 0;
        ttsRef.current.currentTime = 0;
		videoRef.current.pause();
	}

    useEffect(() => {
        if(!!originalRef.current || !!ttsRef.current || !!videoRef.current) {
            originalRef.current.volume = 1 * original;
            ttsRef.current.volume = 1 * tts;
        }
    }, [original, tts])

    return(
        <div className="bg-black p-4 h-[96vh] text-white text-center">
			<div className="grid grid-cols-9 pb-2">
				<button className="bg-gray-700 py-2 px-3 mx-5 rounded-lg hover:bg-gray-900 col-start-4" onClick={handlePlay}>Play <FontAwesomeIcon icon={faPlay} style={{"padding": "0 0.5vw 0 0.5vw"}}/></button>
				<button className="bg-gray-700 py-2 px-3 mx-5 rounded-lg hover:bg-gray-900" onClick={handlePause}>Pause <FontAwesomeIcon icon={faPause} style={{"padding": "0 0.5vw 0 0.5vw"}}/></button>
				<button className="bg-gray-700 py-2 px-3 mx-5 rounded-lg hover:bg-gray-900" onClick={handleRestart}>Restart <FontAwesomeIcon icon={faArrowLeft} style={{"padding": "0 0.5vw 0 0.5vw"}}/></button>
			</div>
			<video id="video" src={"/shakespeare_cropped_small.mp4"} ref={videoRef} type="video/mp4" className="mx-auto h-4/5" muted/>
            <audio src="shakespeare_cropped.mp3" type="audio/mpeg" ref={originalRef}/>
            <audio src="shakespeare_TTS.mp3" type="audio/mpeg" ref={ttsRef}/>
            <div>
                <button className="bg-gray-700 py-2 px-3 mx-5 rounded-lg hover:bg-gray-900 my-3" onClick={handleChangeVideo}>Change difficulty <FontAwesomeIcon icon={faBolt} style={{"padding": "0 0.3vw 0 0.3vw"}}/></button>
                {original ? (<p>Original <FontAwesomeIcon icon={faThumbsDown} style={{"padding": "0 0.3vw 0 0.3vw"}}/></p>) : (<p>Simplified <FontAwesomeIcon icon={faThumbsUp} style={{"padding": "0 0.3vw 0 0.3vw"}}/></p>)}
            </div>
		</div>
    )
}

export default Background;