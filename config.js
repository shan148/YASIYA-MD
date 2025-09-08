const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~1doUDSiS#BTmVeBOj4qRNqJW7XggwrQxMfcMV9WVlL1S-7e3asvo'
};
