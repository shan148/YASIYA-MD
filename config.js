const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~L5YGFBLC#1B0waWztXidGfcO8aXRaVuY5Lt-xcLI-cYkm7Cn-oJA'
};
