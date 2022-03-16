import './userinfo.scss';

export default function UserInfo({ user }) {
	console.log(user);
	return (
		<section className="userinfo-container">
			<div className="row">
				<h2>Your User Settings</h2>
				<div className="user">
					<form className="user-form">
						<div className="user-info">
							<div className="user-row">
								<h3>Weight</h3>
								<input
									type="number"
									name="weight"
									id="weight"
									placeholder={user.weight ? user.weight : 0}
								/>
							</div>
							<div className="user-row">
								<h3>Height</h3>
								<input
									type="number"
									name="height"
									id="height"
									placeholder={user.height ? user.height : 0}
								/>
							</div>
							<div className="user-row">
								<h3>Age</h3>
								<input
									type="number"
									name="age"
									id="age"
									placeholder={user.age ? user.age : 0}
								/>
							</div>
							<div className="user-row">
								<h3>Gender</h3>
								<input
									type="text"
									name="gender"
									id="gender"
									placeholder={
										user.gender ? user.gender : 'N/A'
									}
								/>
							</div>
						</div>
						<div className="add-button">
							<button type="submit">Update Info</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
