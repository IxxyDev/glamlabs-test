import Input from "../Input/Input.tsx";
import MainButton from "../MainButton/MainButton.tsx";
import useForm from "./useForm.ts";

import "./Form.css";

interface FormField {
	name: string;
	type: string;
	label: string;
	placeholder?: string;
	required?: boolean;
}

interface FormProps {
	fields: FormField[];
	onSubmit: (data: Record<string, string>) => void;
	onPrev?: () => void;
}

const Form = ({ fields, onSubmit, onPrev }: FormProps) => {
	const { formData, errors, handleChange, handleSubmit, isValid } = useForm({
		fields,
		onSubmit,
	});

	return (
		<form onSubmit={handleSubmit}>
			{fields.map((field) => (
				<Input
					key={field.name}
					name={field.name}
					type={field.type}
					label={field.label}
					value={formData[field.name] || ""}
					placeholder={field.placeholder}
					required={field.required}
					onChange={handleChange}
					error={errors[field.name]}
				/>
			))}
			<div className="onboarding-buttons">
				{onPrev && <MainButton onClick={onPrev}>Back</MainButton>}
				<MainButton type="submit" disabled={!isValid}>
					Next
				</MainButton>
			</div>
		</form>
	);
};

export default Form;
