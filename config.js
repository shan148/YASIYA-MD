const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~OwhQCQ4B#EyKNJzzDp9d-IfpIOHJzmh_S0ac_JZwvQxO6aHDMu5s'
};
