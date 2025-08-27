const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~7xpTFaBI#Vgw4uSv3ofYOfjjK5A4d-tXFOkxGRCMkY5WJxWTrU0Y'
};
