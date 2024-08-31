import "../Onboarding.css";
import Form from "../../Form/Form.tsx";

export interface Step1Props {
	onNext: () => void;
	onFormDataChange: (data: Record<string, string>) => void;
	formData: Record<string, string>;
}

const Step1 = ({ onNext, onFormDataChange, formData }: Step1Props) => {
	const fields = [
		{
			name: "email",
			type: "email",
			label: "Email:",
			required: true,
			value: formData.email,
		},
	];

	const handleSubmit = (data: Record<string, string>) => {
		onFormDataChange(data);
		onNext();
	};

	return (
		<div className="onboarding-step">
			<h2>Step 1: Login with Email</h2>
			<Form fields={fields} onSubmit={handleSubmit} />
		</div>
	);
};

export default Step1;
