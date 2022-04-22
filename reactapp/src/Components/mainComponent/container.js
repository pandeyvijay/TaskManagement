import React from "react";
import { Outlet } from "react-router-dom";

const Container = ()=>{
    return <article className="container__middle">
            
        <Outlet/>
    </article>

}

export default Container;