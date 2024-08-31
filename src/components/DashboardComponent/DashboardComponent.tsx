import { useEffect, useState } from "react";
import { analyticsService } from "../../services/analyticsService";
import "./Dashboard.css";

interface User {
	id: string;
	email: string;
	hasPaid: boolean;
}

const Dashboard = () => {
	const [analytics, setAnalytics] = useState({
		totalOnboarded: 0,
		totalPaid: 0,
		users: [] as User[],
	});

	useEffect(() => {
		const data = analyticsService.getAnalytics();
		setAnalytics(data);
	}, []);

	return (
		<div className="dashboard">
			<h1>Analytics Dashboard</h1>
			<div className="analytics-card">
				<h2>Total Users Onboarded</h2>
				<p>{analytics.totalOnboarded}</p>
			</div>
			<div className="analytics-card">
				<h2>Total Users Paid</h2>
				<p>{analytics.totalPaid}</p>
			</div>
			<div className="user-list">
				<h2>User Details</h2>
				<table>
					<thead>
						<tr>
							<th>Email</th>
							<th>Payment Status</th>
						</tr>
					</thead>
					<tbody>
						{analytics.users.map((user) => (
							<tr key={user.id}>
								<td>{user.email}</td>
								<td>{user.hasPaid ? "Paid" : "Not Paid"}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Dashboard;
