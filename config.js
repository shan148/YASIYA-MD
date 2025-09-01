const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~G84TRRDZ#6uO_0FRSnooax1e0k2m0-JMnotqkakSGnAE8sUhL7Mo'
};
