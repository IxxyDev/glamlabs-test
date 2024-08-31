import { useState } from "react";
import MainButton from "../MainButton/MainButton.tsx";

import "./Hero.css";

const videos = [
	"https://cdn.getglam.app/content/paywalls/240515_web2web_video1_v04.mp4",
	"https://cdn.getglam.app/content/paywalls/240515_web2web_video2_v01.mp4",
	"https://cdn.getglam.app/content/paywalls/240515_web2web_video3_v01.mp4",
];

const Hero = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNextVideoClick = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
	};

	const handlePrevVideoClick = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + videos.length) % videos.length,
		);
	};

	const handleOnboardingClick = () => {
		window.location.href = "/onboarding";
	};

	return (
		<section className="hero">
			<div className="video-carousel">
				{videos.map((video, index) => (
					<video
						key={video}
						className={`landing-video ${index === currentIndex ? "active" : ""}`}
						autoPlay
						muted
						loop
						aria-label={`Video ${index + 1}`}
						style={{ display: index === currentIndex ? "block" : "none" }}
					>
						<source src={video} type="video/mp4" />
					</video>
				))}
				<button
					className="carousel-control prev"
					onClick={handlePrevVideoClick}
					aria-label="Previous Video"
					type="button"
				/>
				<button
					className="carousel-control next"
					onClick={handleNextVideoClick}
					aria-label="Next Video"
					type="button"
				/>
			</div>
			<div className="cta">
				<h1>Create Trendy AI Videos</h1>
				<MainButton
					onClick={handleOnboardingClick}
					aria-label="Get Started with Onboarding"
				>
					Get Started
				</MainButton>
			</div>
		</section>
	);
};

export default Hero;
