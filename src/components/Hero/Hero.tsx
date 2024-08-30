const Hero = () => {
	const handleClick = () => {
		window.location.href = "/onboarding";
	};

	return (
		<section className="hero">
			<video
				className="landing-video"
				autoPlay
				muted
				loop
				aria-label="Introduction Video"
			>
				<source
					src="https://cdn.getglam.app/content/paywalls/240515_web2web_video1_v04.mp4"
					type="video/mp4"
				/>
			</video>
			<div className="cta">
				<h1>Create Trendy AI Videos</h1>
				<button
					type="button"
					className="get-started"
					onClick={handleClick}
					aria-label="Get Started with Onboarding"
				>
					Get Started
				</button>
			</div>
		</section>
	);
};

export default Hero;
