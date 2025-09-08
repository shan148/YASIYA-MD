const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~25oW1KYD#QSt7bhzqzxQMnF7YQlozvS3-GhWmYi8ngK24-n2FGrU'
};
