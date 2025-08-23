const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~Lx5nFKiL#T7qwN0yAYym6nKEc8p4aeV-QKa50kdOJ3-Ez9jEJFw0'
};
