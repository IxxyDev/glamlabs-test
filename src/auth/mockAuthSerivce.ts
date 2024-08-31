const generateId = () => {
	const arr = Array.from({ length: 10 }).map((_, i) => Math.random() * i);
	return arr.join("");
};

export const mockAuthService = {
	signUp: async (email: string, id: string) => {
		console.log(`User signed up with email: ${email} and password: ${id}`);
		return { userId: generateId(), email };
	},
};
