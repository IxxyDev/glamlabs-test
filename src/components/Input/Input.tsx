import type { ChangeEvent } from "react";
import "./Input.css";

interface InputProps {
	name: string;
	type: string;
	label: string;
	value: string;
	placeholder?: string;
	required?: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	error?: string;
}

const Input = ({
	name,
	type,
	label,
	value,
	placeholder,
	required = false,
	onChange,
	error,
}: InputProps) => {
	return (
		<div className="input-group">
			<label htmlFor={name}>{label}</label>
			<input
				id={name}
				name={name}
				type={type}
				value={value}
				placeholder={placeholder}
				required={required}
				onChange={onChange}
				className={error ? "input-error" : ""}
			/>
			{error && <span className="error-message">{error}</span>}
		</div>
	);
};

export default Input;
