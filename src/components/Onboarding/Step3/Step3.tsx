import Form from "../../Form/Form.tsx";

interface Step3Props {
	onPrev: () => void;
	onNext: () => void;
	onFormDataChange: (data: Record<string, string>) => void;
	formData: Record<string, string>;
}

const Step3 = ({ onPrev, onNext, onFormDataChange, formData }: Step3Props) => {
	const fields = [
		{
			name: "cardNumber",
			type: "text",
			label: "Card Number:",
			required: true,
			value: formData.cardNumber,
		},
		{
			name: "expiryDate",
			type: "text",
			label: "Expiry Date:",
			placeholder: "MM/YY",
			required: true,
			value: formData.expiryDate,
		},
		{
			name: "cvv",
			type: "text",
			label: "CVV:",
			required: true,
			value: formData.cvv,
		},
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
