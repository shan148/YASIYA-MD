const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~G8AnyChL#4wP9R0AEGPZl5OfvGaDVyC6besg37w8NG_rNNpFlIt4'
};
