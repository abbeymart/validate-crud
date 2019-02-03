/**
 * @Author: abbeymart | Abi Akindele | @Created: 2019-01-12 | @Updated: 2019-01-14
 * @Company: mConnect.biz | @License: MIT
 * @Description: mcMessages - package default messages
 */

const path  = require('path');
const utils = require('@mconnect/utils')();

const localeFiles = {
    'en-US': path.join(__dirname, 'js/messages/enUSMessages.js'),
    'en-CA': path.join(__dirname, 'js/messages/enCAMessages.js'),
    'fr-CA': path.join(__dirname, 'js/messages/frCAMessages.js'),
    'fr-FR': path.join(__dirname, 'js/messages/frFRMessages.js'),
};

const options = {};

const mcMessages = utils.getLocale(localeFiles, options);

module.exports = mcMessages;
