import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";

interface FormField {
	name: string;
	type: string;
	label: string;
	placeholder?: string;
	required?: boolean;
	value: string;
}

interface UseFormProps {
	fields: FormField[];
	onSubmit: (data: Record<string, string>) => void;
}

const useForm = ({ fields, onSubmit }: UseFormProps) => {
	const initialFormData = fields.reduce(
		(acc, field) => {
			acc[field.name] = field.value || "";
			return acc;
		},
		{} as Record<string, string>,
	);

	const [formData, setFormData] =
		useState<Record<string, string>>(initialFormData);
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		validate();
	}, [formData]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		setErrors({ ...errors, [name]: "" });
	};

	const validate = (): boolean => {
		const newErrors: Record<string, string> = {};
		fields.forEach((field) => {
			if (field.required && !formData[field.name]) {
				newErrors[field.name] = `${field.label} is required`;
			}
		});
		setErrors(newErrors);
		const formIsValid = Object.keys(newErrors).length === 0;
		setIsValid(formIsValid);
		return formIsValid;
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (validate()) {
			onSubmit(formData);
		}
	};

	return {
		formData,
		errors,
		handleChange,
		handleSubmit,
		isValid,
	};
};

export default useForm;
