const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~b0QXFDyD#9w2kIyGOy7sDvv8qgaODp8IQiX30lx6_41uMHgCXlA0'
};
