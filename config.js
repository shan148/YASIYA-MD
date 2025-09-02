const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~b8wUDDoK#a8OYNJ4KbBt7VwBPfTtlKH2R1w3sNbSnzYadpqfvq1w'
};
