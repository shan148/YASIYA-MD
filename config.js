const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~XhZ2iT7R#XcAtBjfe1BJFMzkypJJbE5wqL_GcvvB3erwCaXud0ms'
};
