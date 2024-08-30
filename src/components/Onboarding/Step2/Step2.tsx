import "./Onboarding.module.css";

export interface Step2Props {
	onNext: () => void;
	onPrev: () => void;
}

const Step2 = ({ onNext, onPrev }: Step2Props) => {
	return (
		<div className="onboarding-step">
			<h2>Step 2: Additional Information</h2>
			<p>Here you can collect more information from the user.</p>
			<div className="onboarding-buttons">
				<button onClick={onPrev} type="button">
					Back
				</button>
				<button onClick={onNext} type="button">
					Next
				</button>
			</div>
		</div>
	);
};

export default Step2;
