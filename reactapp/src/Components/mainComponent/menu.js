import React from 'react';
import {BiHome, BiTask, team} from 'react-icons/bi';
import {AiOutlineTeam, AiFillProject} from 'react-icons/ai';
import {MdDashboard} from 'react-icons/md';
import { WrappedIcon } from '../menu/icon';
import { StyledMenu, MenuContainer } from '../StyledComponents/menuDiv';
import { NavLink } from 'react-router-dom';
import MenuLink from '../menu/navLink';


const Menu = ()=>{
    const links = [
        {icon: BiHome, path: ""}, 
        {icon: BiTask, path: "task"}, 
        {icon: MdDashboard, path:"dashboard"},
        {icon: AiOutlineTeam, path:"team"},
        {icon: AiFillProject, path:"project"}];
    return <aside className="container__left">
        <MenuContainer>
            {   
                links.map((link)=>{
                    return <MenuLink {...link}>
                        <WrappedIcon  Icon={link.icon} />
                    </MenuLink>
                })
            }            
        </MenuContainer>
    </aside>
}



export default Menu;