import React from "react";
import "./Header.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ListIcon from "@material-ui/icons/List";
import SearchIcon from "@material-ui/icons/Search";

function Header({ handleSearch, searchQuery }) {
  return (
    <div className="header">
      <div className="header_leftSection">
        <span className="image_span">
          <img
            className="image"
            src="https://media.licdn.com/dms/image/C4D0BAQFcu-9el9CZ9Q/company-logo_200_200/0/1675727143212?e=2147483647&v=beta&t=b1ZLRpQTZWunozdnyjOou1IyZC14SLdgDNIRnC_PcBI"
            alt="#"
          />
        </span>
        <div className="header_input">
          
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search by name..."
          />
          <SearchIcon className="icon_input" />
        </div>
      </div>
      <div className="header_rightSection">
        <span className="category">
          <ListIcon />
          Category
        </span>
        <span>
          <NotificationsIcon />
        </span>
        <span>
          <AccountCircleIcon />
        </span>
      </div>
    </div>
  );
}

export default Header;
