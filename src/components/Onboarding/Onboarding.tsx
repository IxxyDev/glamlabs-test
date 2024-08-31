import { useState } from "react";
import Step1 from "./Step1/Step1.tsx";
import Step2 from "./Step2/Step2.tsx";
import Step3 from "./Step3/Step3.tsx";

import { mockAuthService } from "../../auth/mockAuthSerivce.ts";
import Success from "./Success/Success.tsx";

type UserCredentials = {
	email: string;
	password: string;
};

const Onboarding = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState<UserCredentials>({
		email: "",
		password: "",
	});

	const handleNext = () => setStep(step + 1);
	const handlePrev = () => setStep(step - 1);

	const handleFormDataChange = (data: Record<string, string>) => {
		setFormData({ ...formData, ...data });
	};

	const handleFinish = async () => {
		const { email, password } = formData;
		try {
			const user = await mockAuthService.signUp(email, password);
			console.log("User successfully onboarded:", user);
			handleNext();
		} catch (error) {
			console.error("Error during onboarding:", error);
		}
	};

	const handleFinalFinish = () => {
		window.location.href = "/";
	};

	return (
		<div className="onboarding-container">
			{step === 1 && (
				<Step1 onNext={handleNext} onFormDataChange={handleFormDataChange} />
			)}
			{step === 2 && (
				<Step2
					onNext={handleNext}
					onPrev={handlePrev}
					onFormDataChange={handleFormDataChange}
				/>
			)}
			{step === 3 && (
				<Step3
					onPrev={handlePrev}
					onNext={handleFinish}
					onFormDataChange={handleFormDataChange}
				/>
			)}
			{step === 4 && <Success onFinish={handleFinalFinish} />}
		</div>
	);
};

export default Onboarding;
