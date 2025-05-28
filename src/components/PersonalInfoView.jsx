import "../styles/PersonalInfoView.css";

function PersonalInfoView({ user }) {
  return (
    <div className="personalInfoView">
      <h2>{user.name + " " + user.lastName}</h2>
      <div className="extraDetails">
        <p className="infoItem"><span class="material-symbols-outlined">
            mail
            </span> {user.email}</p>
        <p className="infoItem"><span class="material-symbols-outlined">
            phone
            </span> {user.phone}</p>
      </div>
    </div>
  );
}

export default PersonalInfoView;