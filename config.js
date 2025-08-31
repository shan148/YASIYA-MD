const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~CoYxAAbQ#qvMYn4EYWQM3nWeRQU0F_Tq1e-i1weEOaQz03nDYgvE'
};
