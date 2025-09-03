const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~OwhQBY6C#JbW7EgrLUsvA_c0P7TGC7dZyRhni1BR3wuW6mI8sgbk'
};
