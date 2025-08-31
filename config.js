const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~n4oABZaL#X7t1Osn1Sh-HJipcCEeTQ7ehmmu2K0y_tvd7Ji6TepA'
};
