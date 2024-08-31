import Form from "../../Form/Form.tsx";

interface Step2Props {
	onNext: () => void;
	onPrev: () => void;
	onFormDataChange: (data: Record<string, string>) => void;
	formData: Record<string, string>;
}

const Step2 = ({ onNext, onPrev, onFormDataChange, formData }: Step2Props) => {
	const fields = [
		{
			name: "name",
			type: "text",
			label: "Name:",
			required: true,
			value: formData.name,
		},
		{
			name: "phone",
			type: "tel",
			label: "Phone:",
			required: true,
			value: formData.phone,
		},
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
