const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~y9ognYqY#sx5lGS3ipoEZeqSTZn8BKP6LmHB_iwsODfCRz90298w'
};
