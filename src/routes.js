const routes = require('express').Router();
const { User } = require('./app/models');

User.create({
    name: "Adriel",
    email: "adrielmodollo@outlook.com", 
    password_hash: "32151567"
})

module.exports = routes;