import "./Onboarding.module.css";

export interface Step1Props {
	onNext: () => void;
}

const Step1 = ({ onNext }: Step1Props) => {
	return (
		<div className="onboarding-step">
			<h2>Step 1: Login with Email</h2>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					onNext();
				}}
			>
				<input type="email" placeholder="Enter your email" required />
				<button type="submit">Next</button>
			</form>
		</div>
	);
};

export default Step1;
