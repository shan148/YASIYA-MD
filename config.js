const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~hI53RIKJ#N7DEZ-WR9_XeC3QM9Exb5QMT3aOtX-mu-YolmywwYQY'
};
