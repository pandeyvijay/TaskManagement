const express = require('express');
const teamRoute = require('./teamroute');

const configureRoutes = [
    { path: '/team', route: teamRoute }
]
module.exports = configureRoutes;
