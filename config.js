const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~&u0R0kJ5R#MXcgzUyqTcIiwAU3Zyapjiwk-YjnofO3KbqXNGxHQ_4'
};
