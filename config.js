const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~nhByEaAL#Rpt_t8Bh8zVQtj-ePwdEddlK6DIY1Ejys3dR1n9mJQc'
};
