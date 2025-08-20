const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~rpBjAQbK#vI4LRFCYR98ZutdS7eLwG9jhCjOlL77GcrV6Y9j4tbg'
};
