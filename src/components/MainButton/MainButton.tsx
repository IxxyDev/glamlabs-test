import "./MainButton.css";
import type { ReactNode } from "react";

interface MainButtonProps {
	onClick?: () => void;
	type?: "button" | "submit";
	disabled?: boolean;
	children?: ReactNode;
}

const MainButton = ({
	onClick,
	type = "button",
	disabled = false,
	children,
}: MainButtonProps) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`main-button ${disabled ? "main-button-disabled" : ""}`}
		>
			{children}
		</button>
	);
};

export default MainButton;
