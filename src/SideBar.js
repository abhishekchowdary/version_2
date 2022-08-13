import React, { useState } from "react";
import "./Home";
import{Link} from "react-router-dom";
import Logger from "./Logger";
import"./Sidebar.css";
import "./Home.css";

function SideBar() {

  return (
    <div className="SideBar_">
        <button ><Link to='/'></Link>
          Transaction
        </button>
        <button><Link to='./Logger'></Link>
            Logger
        </button>
      </div>
  );
}

export default SideBar;
