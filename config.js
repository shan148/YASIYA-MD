const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~H4gFTIBb#RNlywPFZQ3EqdzK_I3s0X3xHHBrBHFlz4jz3xnZ3oSE'
};
