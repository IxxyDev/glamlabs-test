import Form from "../../Form/Form.tsx";

interface Step3Props {
	onPrev: () => void;
	onNext: () => void;
	onFormDataChange: (data: Record<string, string>) => void;
}

const Step3 = ({ onPrev, onNext, onFormDataChange }: Step3Props) => {
	const fields = [
		{ name: "cardNumber", type: "text", label: "Card Number:", required: true },
		{
			name: "expiryDate",
			type: "text",
			label: "Expiry Date:",
			placeholder: "MM/YY",
			required: true,
		},
		{ name: "cvv", type: "text", label: "CVV:", required: true },
	];

	const handleSubmit = (data: Record<string, string>) => {
		onFormDataChange(data);
		onNext();
	};

	return (
		<div className="onboarding-step">
			<h2>Step 3: Payment Information</h2>
			<Form fields={fields} onSubmit={handleSubmit} onPrev={onPrev} />
		</div>
	);
};

export default Step3;
