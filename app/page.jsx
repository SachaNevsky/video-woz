"use client";

import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faRefresh, faArrowRight, faArrowLeft, faPause } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
	const [t, setT] = useState(0);
	const [index, setIndex] = useState(1);
	const pauses = [0, 4.793, 5.895, 6.413, 7.385, 15.000, 16.658, 19.19546, 20.347, 22.569, 24.042, 26.000, 29.000, 32.532, 33.25, 35.133, 37.156, 38.23, 39.596, 41.057, 41.93, 42.772, 46.2455, 49.794, 51.836, 53.01, 57.61, 61.632];

	const videoRef = useRef(null);

	const handlePlay = () => {
		videoRef.current.play();
	}

	const handlePause = () => {
		videoRef.current.pause();
		setT(videoRef.current.currentTime);
	}

	const handleRestart = () => {
		videoRef.current.currentTime = 0;
		setIndex(1);
		videoRef.current.pause();
	}

	const handleNext = () => {
		setIndex(index + 1);
		videoRef.current.play();
	}

	const handleRePlay = () => {
		videoRef.current.currentTime = pauses[index - 1];
		videoRef.current.play();
	}

	useEffect(() => {
		const pauses = [0, 4.793, 5.895, 6.413, 7.385, 15.000, 16.658, 19.19546, 20.347, 22.569, 24.042, 26.000, 29.000, 32.532, 33.25, 35.133, 37.156, 38.23, 39.596, 41.057, 41.93, 42.772, 46.2455, 49.794, 51.836, 53.01, 57.61, 61.632];
		const video = videoRef.current;
		const targetTime = pauses[index] * 1000;

		const checkTime = () => {
			if(Math.abs(video.currentTime * 1000 - targetTime) <= 50) {
				handlePause();
			} else {
				setT(Math.abs(video.currentTime * 1000 - targetTime));
			};
		};

		const interval = setInterval(checkTime, 5);

		return () => {
			clearInterval(interval);
		};
	}, [setT, setIndex, index]);

	return (
		<div className="bg-black p-4 h-[96vh] text-white text-center">
			<div className="grid grid-cols-9">
				<button className="bg-gray-700 py-2 px-3 mx-5 rounded-lg hover:bg-gray-900 col-start-4" onClick={handlePlay}>Play <FontAwesomeIcon icon={faPlay} style={{"padding": "0 0.5vw 0 0.5vw"}}/></button>
				<button className="bg-gray-700 py-2 px-3 mx-5 rounded-lg hover:bg-gray-900" onClick={handlePause}>Pause <FontAwesomeIcon icon={faPause} style={{"padding": "0 0.5vw 0 0.5vw"}}/></button>
				<button className="bg-gray-700 py-2 px-3 mx-5 rounded-lg hover:bg-gray-900" onClick={handleRestart}>Restart <FontAwesomeIcon icon={faArrowLeft} style={{"padding": "0 0.5vw 0 0.5vw"}}/></button>
			</div>
			<video id="video" src="/video.mp4" ref={videoRef} type="video/mp4" className="mx-auto h-4/5" />
			<div className="pb-5 grid grid-cols-6">
				<button className="bg-gray-700 py-2 px-3 mx-5 rounded-lg hover:bg-gray-900 col-start-3" onClick={handleNext}>Next <FontAwesomeIcon icon={faArrowRight} style={{"padding": "0 0.5vw 0 0.5vw"}}/></button>
				<button className="bg-gray-700 py-2 px-3 mx-5 rounded-lg hover:bg-gray-900" onClick={handleRePlay}>RePlay <FontAwesomeIcon icon={faRefresh} style={{"padding": "0 0.5vw 0 0.5vw"}}/></button>
			</div>
		</div>
	);
}

export default Home;