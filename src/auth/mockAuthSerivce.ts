export const mockAuthService = {
	signUp: async (email: string, password: string) => {
		console.log(
			`User signed up with email: ${email} and password: ${password}`,
		);
		return { userId: "12345", email };
	},
	signIn: async (email: string, password: string) => {
		console.log(
			`User signed in with email: ${email} and password: ${password}`,
		);
		return { userId: "12345", email };
	},
};
