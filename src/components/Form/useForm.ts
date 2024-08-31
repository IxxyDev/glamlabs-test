import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";

interface FormField {
	name: string;
	type: string;
	label: string;
	placeholder?: string;
	required?: boolean;
}

interface UseFormProps {
	fields: FormField[];
	onSubmit: (data: Record<string, string>) => void;
}

const useForm = ({ fields, onSubmit }: UseFormProps) => {
	const [formData, setFormData] = useState<Record<string, string>>({});
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [isValid, setIsValid] = useState<boolean>(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		setErrors({ ...errors, [name]: "" });
	};

	const validateEmail = (email: string): boolean => {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailPattern.test(email);
	};

	const validate = () => {
		const newErrors: Record<string, string> = {};
		fields.forEach((field) => {
			if (field.required && !formData[field.name]) {
				newErrors[field.name] = `${field.label} is required`;
			} else if (
				field.type === "email" &&
				!validateEmail(formData[field.name] || "")
			) {
				newErrors[field.name] = "Invalid email format";
			}
		});
		setErrors(newErrors);
		setIsValid(Object.keys(newErrors).length === 0);
		return Object.keys(newErrors).length === 0;
	};

	useEffect(() => {
		validate();
	}, [formData]);

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
