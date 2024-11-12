import React from "react";
import "./Sidebar.css";
import XIcon from "@mui/icons-material/X";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarOption">
        <IconButton>
          <XIcon sx={{ fontSize: 45, color: "black" }}/>
        </IconButton>
      </div>
      <div className="sidebarOption">
        <IconButton>
          <HomeIcon sx={{ fontSize: 30, color: "black" }}/>
        </IconButton>
      </div>
      <div className="sidebarOption">
        <IconButton>
          <SearchIcon sx={{ fontSize: 30, color: "black" }}/>
        </IconButton>
      </div>
      <div className="sidebarOption">
        <IconButton>
          <NotificationsNoneIcon sx={{ fontSize: 30, color: "black" }}/>
        </IconButton>
      </div>
      <div className="sidebarOption">
        <IconButton>
          <MailOutlineIcon sx={{ fontSize: 30, color: "black" }}/>
        </IconButton>
      </div>
      <div className="sidebarOption">
        <IconButton>
          <PersonOutlineIcon sx={{ fontSize: 30, color: "black" }}/>
        </IconButton>
      </div>
      <div className="sidebarOption">
        <IconButton>
          <MoreHorizIcon sx={{ fontSize: 30, color: "black" }}/>
        </IconButton>
      </div>
      <div className="sidebarOption">
        <IconButton>
          <AddCircleOutlineOutlinedIcon sx={{ fontSize: 30, color: "black" }}/>
        </IconButton>
      </div>
    </div>
  );
}

export default Sidebar;
