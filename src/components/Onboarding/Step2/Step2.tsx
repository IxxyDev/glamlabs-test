import Form from "../../Form/Form.tsx";

interface Step2Props {
	onNext: () => void;
	onPrev: () => void;
	onFormDataChange: (data: Record<string, string>) => void;
}

const Step2 = ({ onNext, onPrev, onFormDataChange }: Step2Props) => {
	const fields = [
		{ name: "name", type: "text", label: "Name:", required: true },
		{ name: "phone", type: "tel", label: "Phone:" },
	];

	const handleSubmit = (data: Record<string, string>) => {
		onFormDataChange(data);
		onNext();
	};

	return (
		<div className="onboarding-step">
			<h2>Step 2: Basic Information</h2>
			<Form fields={fields} onSubmit={handleSubmit} onPrev={onPrev} />
		</div>
	);
};

export default Step2;
