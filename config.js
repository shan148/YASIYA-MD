const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~65h12SRA#eqNZ9cWNjbEhiHql93Ny3KZIuN1C6gIwDO0rAtpDOmw'
};
