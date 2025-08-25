const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~moYliDyB#RY-Q8DotS_Sx2wbbRYXPECbfBM-45eHPzNvqzlS835U'
};
