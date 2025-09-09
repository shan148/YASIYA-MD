const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~DlQUwKaS#Eg-HYXtcmoNxr4F5gddrTVl6uk59m2Hi2EsCmr4DAOQ'
};
