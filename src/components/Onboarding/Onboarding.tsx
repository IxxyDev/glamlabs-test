import { useState } from "react";
import Step1 from "./Step1/Step1.tsx";
import Step2 from "./Step2/Step2.tsx";
import Step3 from "./Step3/Step3.tsx";

import { mockAuthService } from "../../auth/mockAuthSerivce.ts";
import { analyticsService } from "../../services/analyticsService.ts";
import Success from "./Success/Success.tsx";

type UserData = {
	email: string;
	userId: string;
	name: string;
	phone: string;
	cardNumber: string;
	expiryDate: string;
	cvv: string;
};

const Onboarding = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState<UserData>({} as UserData);

	const handleNext = () => setStep(step + 1);
	const handlePrev = () => setStep(step - 1);

	const handleFormDataChange = (data: Record<string, string>) => {
		setFormData({ ...formData, ...data });
	};

	const handleOnboarding = async () => {
		const { email, userId } = formData;
		try {
			const user = await mockAuthService.signUp(email, userId);
			setFormData({ ...formData, ...user });

			analyticsService.trackOnboarding({
				id: user.userId,
				email: user.email,
				hasPaid: false,
			});
			handleNext();
		} catch (error) {
			console.error("Error during onboarding:", error);
		}
	};

	const handlePayment = () => {
		const { userId } = formData;
		analyticsService.trackPayment(userId);
		handleNext();
	};

	const handleFinish = () => {
		window.location.href = "/";
	};

	return (
		<div className="onboarding-container">
			{step === 1 && (
				<Step1
					onNext={handleNext}
					onFormDataChange={handleFormDataChange}
					formData={formData}
				/>
			)}
			{step === 2 && (
				<Step2
					onNext={handleOnboarding}
					onPrev={handlePrev}
					onFormDataChange={handleFormDataChange}
					formData={formData}
				/>
			)}
			{step === 3 && (
				<Step3
					onPrev={handlePrev}
					onNext={handlePayment}
					onFormDataChange={handleFormDataChange}
					formData={formData}
				/>
			)}
			{step === 4 && <Success onFinish={handleFinish} />}
		</div>
	);
};

export default Onboarding;
