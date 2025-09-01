const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~S1gRyKTZ#diTQTeMqVyNfv4rEdM9ra2NSyoWRm0f0e85O0R9y9xs'
};
