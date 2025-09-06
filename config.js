const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~XxokET5L#z5Yk_sD_dOE1_1vlVN7bxonCJ50KPPgOm_Ebx9uGwvY'
};
