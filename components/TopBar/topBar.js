import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from "@material-ui/icons/Settings";

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="logo">
        <div className="logoStyle">EVENT.OS</div>
        <div className="guestManagement">
          Guest Management <br /> Plataform
        </div>
      </div>
      <div className="iconsDummy">
        <NotificationsIcon color="primary" />
        <SettingsIcon color="primary" />
        <AccountCircleIcon />
        <div className="user">
          AFRegedor <br />
          <span style={{ color: "#4c62c5", fontSize: "10px" }}>LOGOUT</span>
        </div>
      </div>
    </div>
  );
}
