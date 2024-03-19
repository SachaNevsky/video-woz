"use client";

import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faArrowLeft, faPause } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
	const videoRef = useRef(null);

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

	return (
		<div className="bg-black p-4 h-[96vh] text-white text-center">
			<div className="grid grid-cols-9">
				<button className="bg-gray-700 py-2 px-3 mx-5 rounded-lg hover:bg-gray-900 col-start-4" onClick={handlePlay}>Play <FontAwesomeIcon icon={faPlay} style={{"padding": "0 0.5vw 0 0.5vw"}}/></button>
				<button className="bg-gray-700 py-2 px-3 mx-5 rounded-lg hover:bg-gray-900" onClick={handlePause}>Pause <FontAwesomeIcon icon={faPause} style={{"padding": "0 0.5vw 0 0.5vw"}}/></button>
				<button className="bg-gray-700 py-2 px-3 mx-5 rounded-lg hover:bg-gray-900" onClick={handleRestart}>Restart <FontAwesomeIcon icon={faArrowLeft} style={{"padding": "0 0.5vw 0 0.5vw"}}/></button>
			</div>
			<video id="video" src="/complexity_marker.mp4" ref={videoRef} type="video/mp4" className="mx-auto h-5/6" />
		</div>
	);
}

export default Home;