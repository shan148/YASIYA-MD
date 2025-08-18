const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~moRATTyJ#B2b_KW2uIIjrTcRT7l_3T7eaaCSRELyapsHF6sSOu7s'
};
