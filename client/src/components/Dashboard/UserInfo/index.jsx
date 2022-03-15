import "./userinfo.scss";

export default function UserInfo({ user }) {
  console.log(user);
  return (
    <section className="userinfo-container">
      <div className="row">
        <h2>Your User Settings</h2>
        <div className="user">
          <div className="user-info">
            <div className="user-row">
              <h3>Weight</h3>
              <input type="text" />
            </div>
            <div className="user-row">
              <h3>Height</h3>
              <input type="text" />
            </div>
            <div className="user-row">
              <h3>Age</h3>
              <input type="text" />
            </div>
            <div className="user-row">
              <h3>Gender</h3>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
