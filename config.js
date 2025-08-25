const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~OtIzSb7A#D2lWYOsYgtEyUouiRU1O-7Y0wEe01PXe88ARdy0IqL8'
};
