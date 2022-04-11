import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import Home from '../home';
import Container from './container';
import Menu from './menu';
import Project from '../project';

export default function(){
    return <main className="container__main">
        <Menu/>
        <Routes>
            <Route path='/' element={<Container/>}>
                <Route index element={<Home/>} />
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path="/project" element={<Project/>}>
                </Route>
            </Route> 
        </Routes>
    </main>
}