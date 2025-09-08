const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~8BYhzKpA#4Y0hcC2ZCLWPl4r8ZK92cgeO2o-a448kbwdV0ChV5HY'
};
