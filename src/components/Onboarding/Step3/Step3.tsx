import "./Onboarding.module.css";

export interface Step3Props {
	onPrev: () => void;
}

const Step3 = ({ onPrev }: Step3Props) => {
	return (
		<div className="onboarding-step">
			<h2>Step 3: Confirmation</h2>
			<p>You're all set! Click Finish to complete your onboarding.</p>
			<div className="onboarding-buttons">
				<button onClick={onPrev} type="button">
					Back
				</button>
				<button onClick={() => alert("Onboarding Complete!")} type="button">
					Finish
				</button>
			</div>
		</div>
	);
};

export default Step3;
