const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD-T1ghlSJC#VGW4slIiB505dVR7OrbQut8eKLfHGOovCGYJg1PyVbc'
};
