import MainButton from "../../MainButton/MainButton.tsx";

interface SuccessProps {
	onFinish: () => void;
}

const Success = ({ onFinish }: SuccessProps) => {
	return (
		<div className="onboarding-step">
			<h2>Signup Successful!</h2>
			<p>
				Congratulations, your signup process is complete. You can now proceed to
				your dashboard.
			</p>
			<MainButton onClick={onFinish} type="button">
				Go to Website
			</MainButton>
		</div>
	);
};

export default Success;
