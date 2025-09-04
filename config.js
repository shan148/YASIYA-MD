const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~O14lnCpK#MairCN9D4vmQoCDg10DP4-yLHVPg7-O9SmFPt9Pn8cA'
};
