const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~vkRmSLhS#alqb6XAy8dBvxvY7Y-8oPzHI5s1DffP0QCukgZXSMbk'
};
