import React from "react";
import { NavLink } from "react-router-dom";

const MenuLink = ({path, children})=>{
    return <NavLink key={path} style={{
                textAlign:"center", paddingTop:"5px", paddingBottom:"5px", cursor:"pointer"
            }}
            className={({isActive})=> isActive ? "activeLink" : ""}
            to={path}>
        {children}
    </NavLink>

}

export default MenuLink;