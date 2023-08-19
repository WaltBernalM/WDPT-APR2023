import { Navigate } from "react-router-dom";

const Profile = ({isLoggedIn}) => {


    if(!isLoggedIn) return <Navigate to="/signup"/>


    return (
        <div className="profile">
            <div className="profile-picture">
                <img src="https://www.w3schools.com/howto/img_avatar.png" width={200} alt="Profile"/>
            </div>
            <div className="profile-info">
                <div className="profile-name">John Doe</div>
                <div className="profile-gender">Male</div>
            </div>
        </div>
    )
}

export default Profile; 