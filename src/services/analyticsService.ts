interface User {
	id: string;
	email: string;
	hasPaid: boolean;
}

const loadAnalyticsData = () => {
	const data = localStorage.getItem("analyticsData");
	return data
		? JSON.parse(data)
		: { totalOnboarded: 0, totalPaid: 0, users: [] as User[] };
};

const saveAnalyticsData = (data: unknown) => {
	localStorage.setItem("analyticsData", JSON.stringify(data));
};

export const analyticsService = {
	trackOnboarding: (user: User) => {
		const analyticsData = loadAnalyticsData();
		analyticsData.totalOnboarded += 1;
		analyticsData.users.push(user);
		saveAnalyticsData(analyticsData);
	},
	trackPayment: (userId: string) => {
		const analyticsData = loadAnalyticsData();
		const user = analyticsData.users.find((u: User) => u.id === userId);
		if (user && !user.hasPaid) {
			user.hasPaid = true;
			analyticsData.totalPaid += 1;
			saveAnalyticsData(analyticsData);
		}
	},
	getAnalytics: () => {
		return loadAnalyticsData();
	},
};
